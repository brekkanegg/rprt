import {
  Box,
  Button,
  Divider,
  Heading,
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
import type { NextPage } from 'next'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  erc721ABI,
  useAccount,
  useContractRead,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import axios from 'axios'
import { LocationNFT as MUMBAI_LOCATION_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
import { BuffNFT as MUMBAI_BUFF_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
import NFTJson from '../artifacts/contracts/BuffNFT.sol/BuffNFT.json'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import {
  generateTokenUriFromPosition,
  generateTokenUriFromPhoto,
} from '../utils/generateTokenUri'
import { getCurrentPosition } from '../utils/getCurrentPosition'
import { calcDistanceFromLatLonInMeters } from '../utils/calcDistanceFromLatLon'
import { IPFS_BASE_URL, ipfs } from '../utils/ipfs'
import { NftList } from '../components/NftList'
import { EditableContract } from '../components/EditableContract'

// FIXME: Find way to use wagmi instead
const { Alchemy, Network } = require('alchemy-sdk')
const settings = {
  apiKey: process.env.NEXT_PUBLIC_MUMBAI_ALCHEMY_APIKEY,
  network: Network.MATIC_MUMBAI,
}
const alchemy = new Alchemy(settings)

const BuffMinter: NextPage = () => {
  const [hasWhitelist, setHasWhitelist] = useState(false)
  const whitelistRef = useRef(new Array<string>())
  // const [hasNftUri, setHasNftUri] = useState(false)
  const nftUriRef = useRef(new Array<string>())

  const [distRadius, setDistRadius] = useState(100)
  const [timeRadius, setTimeRadius] = useState(300)

  const { isLocalChain } = useCheckLocalChain()

  // const nftContract = isLocalChain
  //   ? MUMBAI_BUFF_NFT_ADDRESS //LOCAL_CONTRACT_ADDRESS
  //   : MUMBAI_BUFF_NFT_ADDRESS

  const [nftContract, setNftContract] = useState(MUMBAI_BUFF_NFT_ADDRESS)
  const updatedNftContractRef = useRef(false)

  const { isMounted } = useIsMounted()

  const { address } = useAccount()

  const toast = useToast()

  const CONTRACT_CONFIG = useMemo(() => {
    return {
      address: nftContract,
      abi: NFTJson.abi,
    }
  }, [nftContract])

  ///// NFT list

  // Gets the total number of NFTs owned by the connected address.
  const { data: nftBalanceData, refetch: refetchNftBalanceData } =
    useContractRead({
      address: nftContract,
      abi: erc721ABI,
      functionName: 'balanceOf',
      args: address ? [address] : undefined,
    })

  // Creates the contracts array for `nftTokenIds`
  const tokenOwnerContractsArray = useMemo(() => {
    let contractCalls = []

    if (nftBalanceData && nftBalanceData.toNumber) {
      const nftBalance = nftBalanceData.toNumber()

      for (let tokenIndex = 0; tokenIndex < nftBalance; tokenIndex++) {
        const contractObj = {
          ...CONTRACT_CONFIG,
          functionName: 'tokenOfOwnerByIndex',
          args: [address, tokenIndex],
        }

        contractCalls.push(contractObj)
      }
    }

    return contractCalls
  }, [CONTRACT_CONFIG, address, nftBalanceData])

  // Gets all of the NFT tokenIds owned by the connected address.
  const { data: nftTokenIds } = useContractReads({
    contracts: tokenOwnerContractsArray,
    enabled: tokenOwnerContractsArray.length > 0,
  })

  // Creates the contracts array for `nftTokenUris`
  const tokenUriContractsArray = useMemo(() => {
    if (!nftTokenIds || nftTokenIds.length === 0) {
      return []
    }

    const contractCalls = nftTokenIds?.map((tokenId) => {
      return {
        ...CONTRACT_CONFIG,
        functionName: 'tokenURI',
        args: tokenId ? [tokenId] : undefined,
      }
    })

    return contractCalls
  }, [CONTRACT_CONFIG, nftTokenIds])

  // Gets all of the NFT tokenUris owned by the connected address.
  const { data: nftTokenUris } = useContractReads({
    contracts: tokenUriContractsArray,
    enabled: tokenUriContractsArray.length > 0,
  })

  /////

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
            <Text>Successfully dropped your BUFF NFT!</Text>
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
      refetchNftBalanceData()
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
    if (updatedNftContractRef.current) return
    updatedNftContractRef.current = true
    const sessionNftContract = window.localStorage.getItem('nftContract')
    if (sessionNftContract !== null) {
      setNftContract(sessionNftContract)
      console.log('State Set: ', sessionNftContract)
    }
  }, [])

  useEffect(() => {
    console.log('localStorage Set: ', nftContract)
    window.localStorage.setItem('nftContract', nftContract)
  }, [nftContract])

  useEffect(() => {
    if (hasWhitelist && write) {
      console.log('22')
      write()
      setHasWhitelist(false)
    }
  }, [hasWhitelist, write])

  if (!isMounted) {
    return null
  }

  return (
    <Layout>
      <Heading as="h1" mb="8">
        Drop Buff NFT
      </Heading>
      <Text mt="8" fontSize="md" color="blue">
        This page only works on the Polygon Mumbai Testnet.
      </Text>

      <Box p="8" mt="8" bg="gray.100">
        <Text fontSize="xl" textAlign="center">
          Contract Address: {nftContract}
        </Text>
        <EditableContract
          nftContract={nftContract}
          setContractFn={setNftContract}
        />
        <Divider my="8" borderColor="gray.400" />
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
                ? 'Drop Buff (only-owner)'
                : 'Please Connect Your Wallet'}
            </Button>
          </Text>
        </VStack>
        <Divider my="8" borderColor="gray.400" />
        {nftTokenUris && (
          <NftList address={address} ipfs={ipfs} nftTokenUris={nftTokenUris} />
        )}
      </Box>
    </Layout>
  )
}

export default BuffMinter
