import {
  Box,
  Button,
  Divider,
  Heading,
  Link,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { create } from 'ipfs-http-client'
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
import { LocationNFT as MUMBAI_LOCATION_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
import { BuffNFT as MUMBAI_BUFF_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
import NFTJson from '../artifacts/contracts/BuffNFT.sol/BuffNFT.json'
import { Layout } from '../components/layout/Layout'
import { NftList } from '../components/NftList'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import { generateTokenUri } from '../utils/generateTokenUri'
import { getCurrentPosition } from '../utils/getCurrentPosition'
import { calcDistanceFromLatLonInMeters } from '../utils/calcDistanceFromLatLon'

// FIXME: Find way to use wagmi instead
const { Alchemy, Network } = require('alchemy-sdk')
const settings = {
  apiKey: process.env.NEXT_PUBLIC_MUMBAI_ALCHEMY_APIKEY,
  network: Network.MATIC_MUMBAI,
}
const alchemy = new Alchemy(settings)

const NftIndex: NextPage = () => {
  const [hasWhitelist, setHasWhitelist] = useState(false)
  const whitelistRef = useRef(new Array<string>())

  const [distInterval, setDistInterval] = useState(100)
  const [timeInterval, setTimeInterval] = useState(300)

  const { isLocalChain } = useCheckLocalChain()

  const { isMounted } = useIsMounted()

  const CONTRACT_ADDRESS = isLocalChain
    ? MUMBAI_BUFF_NFT_ADDRESS //LOCAL_CONTRACT_ADDRESS
    : MUMBAI_BUFF_NFT_ADDRESS

  const { address } = useAccount()

  const toast = useToast()

  const CONTRACT_CONFIG = useMemo(() => {
    return {
      address: CONTRACT_ADDRESS,
      abi: NFTJson.abi,
    }
  }, [CONTRACT_ADDRESS])

  const { config } = usePrepareContractWrite({
    ...CONTRACT_CONFIG,
    functionName: 'airdropNFTs',
    args: [whitelistRef.current],
    enabled: hasWhitelist,
  })

  const { data, write } = useContractWrite(config)

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      console.log('success data', data)
      setHasWhitelist(false)
      whitelistRef.current = new Array<string>()
      toast({
        title: 'Transaction Successful',
        description: (
          <>
            <Text>Successfully minted your NFT!</Text>
            <Text>
              <Link
                href={`https://mumbai.polygonscan.io/tx/${data?.blockHash}`}
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
  })

  const dropBuff = useCallback(async () => {
    const { nfts } = await alchemy.nft.getNftsForContract(
      MUMBAI_LOCATION_NFT_ADDRESS,
      {
        omitMetadata: false,
      }
    )
    console.log(nfts)
    console.log(nfts[0].rawMetadata.attributes[0].value)

    const whitelist: string[] = []
    const rightNow = Date.now()

    try {
      const position: any = await getCurrentPosition()
      console.log(position)

      for (let nft of nfts) {
        const timeDiff = (rightNow - nft.rawMetadata.attributes[3].value) / 1000 // in Seconds
        console.log('timediff:', timeDiff)
        console.log('timeInterval:', timeInterval)

        if (timeDiff < timeInterval) {
          const distDiff = calcDistanceFromLatLonInMeters(
            position.coords.latitude,
            position.coords.longitude,
            nft.rawMetadata.attributes[0].value,
            nft.rawMetadata.attributes[1].value
          )
          console.log(distDiff)
          if (distDiff < distInterval) {
            // Alchemy API call
            const { owners } = await alchemy.nft.getOwnersForNft(
              MUMBAI_LOCATION_NFT_ADDRESS,
              nft.tokenId
            )
            if (!whitelist.includes(owners[0])) {
              console.log(
                'Buff target found! ',
                '\nOwner is: ',
                owners[0],
                '\nnft metadata: ',
                nft.rawMetadata,
                '\nTime diff (sec): ',
                timeDiff,
                '\nDistance diff (meters): ',
                distDiff
              )

              whitelist.push(owners[0])
            }
          }
        }
      }

      if (whitelist.length > 0) {
        // This will trigger the useEffect to run the `write()` function.
        setHasWhitelist(true)
        whitelistRef.current = whitelist
      } else {
        console.log('No target')
      }
    } catch (error) {
      console.log('error', error)
    }
  }, [timeInterval, distInterval])

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
    <Layout>
      <Heading as="h1" mb="8">
        Drop Buff NFT
      </Heading>
      <Text mt="8" fontSize="md" color="blue">
        This page only works on the Polygon Mumbai Testnet or on a Local Chain.
      </Text>
      <Box p="8" mt="8" bg="gray.100">
        <Text fontSize="xl" textAlign="center">
          Contract Address: {CONTRACT_ADDRESS}
        </Text>
        <Divider my="8" borderColor="gray.400" />
        <VStack shouldWrapChildren>
          <Text textAlign="center" mb="12px">⌚ Time Interval (sec) </Text>
          <NumberInput
            // value={timeInterval}
            isDisabled={!address || isLoading}
            onChange={(value) => setTimeInterval(Number(value))}
            size="md"
            maxW={40}
            defaultValue={300}
            // min={100}
            step={100}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput >
          <Text textAlign="center" mb="12px">🌍 Distance Interval (meter) </Text>
          <NumberInput
            // value={timeInterval}
            isDisabled={!address || isLoading}
            onChange={(value) => setDistInterval(Number(value))}
            size="md"
            maxW={40}
            defaultValue={100}
            // min={100}
            step={100}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </VStack>
        <Text textAlign="center">
          <Button
            colorScheme="teal"
            size="lg"
            disabled={!address || isLoading}
            onClick={dropBuff}
            isLoading={isLoading}
          >
            {address ? 'Drop Buff' : 'Please Connect Your Wallet'}
          </Button>
        </Text>
        <Divider my="8" borderColor="gray.400" />
        {/* {nftTokenUris && (
          <NftList address={address} ipfs={ipfs} nftTokenUris={nftTokenUris} />
        )} */}
      </Box>
    </Layout>
  )
}

export default NftIndex
