import {
  Button,
  Link,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import axios from 'axios'
import { LocationNFT as MUMBAI_LOCATION_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
import NFTJson from '../artifacts/contracts/BuffNFT.sol/BuffNFT.json'
import { useIsMounted } from '../hooks/useIsMounted'
import { generateTokenUriFromPhoto } from '../utils/generateTokenUri'
import { getCurrentPosition } from '../utils/getCurrentPosition'
import { calcDistanceFromLatLonInMeters } from '../utils/calcDistanceFromLatLon'
import { IPFS_BASE_URL, ipfs } from '../utils/ipfs'

import { NftControlProps } from '../types/custom'

// FIXME: Find way to use wagmi instead
const { Alchemy, Network } = require('alchemy-sdk')
const settings = {
  apiKey: process.env.NEXT_PUBLIC_MUMBAI_ALCHEMY_APIKEY,
  network: Network.MATIC_MUMBAI,
}
const alchemy = new Alchemy(settings)

export const NftDropper = ({ address, contractAddress }: NftControlProps) => {
  const [hasWhitelist, setHasWhitelist] = useState(false)
  const whitelistRef = useRef(new Array<string>())
  // const [hasNftUri, setHasNftUri] = useState(false)
  const nftUriRef = useRef(new Array<string>())

  const [distRadius, setDistRadius] = useState(100)
  const [timeRadius, setTimeRadius] = useState(300)

  const { isMounted } = useIsMounted()

  const toast = useToast()

  const CONTRACT_CONFIG = useMemo(() => {
    return {
      address: contractAddress,
      abi: NFTJson.abi,
    }
  }, [contractAddress])

  const { config } = usePrepareContractWrite({
    ...CONTRACT_CONFIG,
    functionName: 'airdropNFTs',
    args: [whitelistRef.current, nftUriRef.current],
    enabled: hasWhitelist,
  })

  const { data, write } = useContractWrite(config)

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      console.log('success data', data)
      whitelistRef.current = new Array<string>()
      setHasWhitelist(false)
      nftUriRef.current = new Array<string>()
      toast({
        title: 'Transaction Successful',
        description: (
          <>
            <Text>Successfully dropped your Buff NFT!</Text>
            <Text>
              <Link
                href={`https://mumbai.polygonscan.com/tx/${data?.transactionHash}`}
                isExternal
              >
                View on Polygonscan
              </Link>
            </Text>
          </>
        ),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      // refetchNftBalanceData()
    },
    onError(error) {
      console.log('Error', error)
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
    },
  })

  const dropBuff = useCallback(async () => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      )

      if (!response.ok) {
        throw Error('Error with fetch')
      }

      const data = await response.json()
      return data
    }

    const repeatArray = (arr: string[], n: number) =>
      [].concat(...Array(n).fill(arr))

    const getBuffWhitelist = async (locationNfts: any) => {
      const position: GeolocationPosition = await getCurrentPosition()
      console.log('current position: ', position.coords)

      const rightNow = Date.now()

      const whitelist: string[] = []
      for (let nft of locationNfts) {
        if (
          nft.metadataError &&
          nft.metadataError === 'IPFS gateway timed out'
        ) {
          console.log('Refetching metadata...', nft)
          const metadata = await axios(nft.tokenUri.raw).then(
            (response) => response.data
          )
          nft.rawMetadata = metadata
        }

        const nftLatitude = nft.rawMetadata.attributes[0].value
        const nftLongitude = nft.rawMetadata.attributes[1].value
        const nftTimestamp = nft.rawMetadata.attributes[3].value

        const timeDiff = (rightNow - nftTimestamp) / 1000 // in Seconds
        if (timeDiff < timeRadius) {
          const distDiff = calcDistanceFromLatLonInMeters(
            position.coords.latitude,
            position.coords.longitude,
            nftLatitude,
            nftLongitude
          )

          if (distDiff < distRadius) {
            const { owners } = await alchemy.nft.getOwnersForNft(
              MUMBAI_LOCATION_NFT_ADDRESS,
              nft.tokenId
            )
            // Only one owner exists since NFT is ERC-721 standard for now.
            if (!whitelist.includes(owners[0])) {
              console.log(
                'Buff target is: ',
                owners[0],
                '\nnft metadata: ',
                nft.rawMetadata,
                '\nTime diff (sec): ',
                timeDiff,
                '\nDistance diff (meters): ',
                distDiff
              )
              whitelist.push(String(owners[0]))
            }
          }
        }
      }

      return whitelist
    }

    try {
      const { nfts } = await alchemy.nft.getNftsForContract(
        MUMBAI_LOCATION_NFT_ADDRESS,
        {
          omitMetadata: false,
          // tokenUriTimeoutInMs: 10000,
        }
      )

      const whitelist = await getBuffWhitelist(nfts)

      if (whitelist.length > 0) {
        // Fetch a random photo from Unsplash
        const photos = await fetchImage()
        console.log(photos)
        // Convert that photo into `tokenURI` metadata
        const tokenURI = generateTokenUriFromPhoto(photos)

        // Upload the `tokenURI` to IPFS
        const uploaded = await ipfs.add(tokenURI)

        nftUriRef.current = repeatArray(
          [`${IPFS_BASE_URL}/${uploaded.path}`],
          whitelist.length
        )

        whitelistRef.current = whitelist
        // This will trigger the useEffect to run the `write()` function.
        setHasWhitelist(true)

        console.log('whitelist: ', whitelistRef.current)
        console.log('nfturi: ', nftUriRef.current)
      } else {
        console.log('No target to give buff! \nAdjust time or distance Radius.')
        toast({
          title: 'No target to give buff.',
          status: 'warning',
          isClosable: true,
        })
      }
    } catch (error) {
      console.log('error', error)
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
    }
  }, [timeRadius, distRadius])

  useEffect(() => {
    if (hasWhitelist && write) {
      write()
      setHasWhitelist(false)
    }
  }, [hasWhitelist, write])

  if (!isMounted) {
    return null
  }

  return (
    <VStack shouldWrapChildren>
      <Text textAlign="center" mb="12px">
        ⌚ Time Radius (sec){' '}
      </Text>
      <NumberInput
        // value={timeRadius}
        isDisabled={!address || isLoading}
        onChange={(value) => setTimeRadius(Number(value))}
        size="md"
        maxW={40}
        defaultValue={300}
        // min={100}
        step={300}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text textAlign="center" mb="12px">
        🌍 Distance Radius (meter){' '}
      </Text>
      <NumberInput
        // value={timeRadius}
        isDisabled={!address || isLoading}
        onChange={(value) => setDistRadius(Number(value))}
        size="md"
        maxW={40}
        defaultValue={1000}
        // min={100}
        step={1000}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text textAlign="center">
        <Button
          colorScheme="teal"
          size="lg"
          disabled={!address || isLoading}
          onClick={dropBuff}
          isLoading={isLoading}
        >
          {address
            ? 'Drop Buff (public for now)'
            : 'Please Connect Your Wallet'}
        </Button>
      </Text>
    </VStack>
  )
}
