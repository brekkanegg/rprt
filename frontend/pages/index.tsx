import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react'
import { create } from 'ipfs-http-client'
// import { ethers, providers } from 'ethers'
import type { NextPage } from 'next'
import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  // useProvider,
  useWaitForTransaction,
} from 'wagmi'
import { LocationNFT as MUMBAI_LOCATION_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
import NFTJson from '../artifacts/contracts/LocationNFT.sol/LocationNFT.json'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
// import { LocationNFT as LocationNFTType } from '../types/typechain'
import { generateTokenUri } from '../utils/generateTokenUri'
import { getCurrentPosition } from '../utils/getCurrentPosition'

/**
 * Constants & Helpers
 */

// const localProvider = new providers.StaticJsonRpcProvider(
//   'http://localhost:8545'
// )

// const MUMBAI_LOCATION_NFT_ADDRESS = '0xf52b2AD55748b63193cE105768086a911f705104'

const IPFS_BASE_URL = 'https://ipfs.io/ipfs'
// FIXME: IPFS - Using someone's projectID
const projectId = '2DDHiA47zFkJXtnxzl2jFkyuaoq'
const projectSecret = '96a91eeafc0a390ab66e6a87f61152aa'
const projectIdAndSecret = `${projectId}:${projectSecret}`

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(projectIdAndSecret).toString(
      'base64'
    )}`,
  },
})

const Home: NextPage = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [hasNftUri, setHasNftUri] = useState(false)
  const nftUriRef = useRef('')

  const { isLocalChain } = useCheckLocalChain() //FIXME: Multiple chain support

  const { isMounted } = useIsMounted()

  // FIXME:
  const CONTRACT_ADDRESS = isLocalChain
    ? MUMBAI_LOCATION_NFT_ADDRESS //LOCAL_CONTRACT_ADDRESS
    : MUMBAI_LOCATION_NFT_ADDRESS

  const { address } = useAccount()

  const toast = useToast()

  // FIXME: Why use useMemo..?
  const CONTRACT_CONFIG = useMemo(() => {
    return {
      address: CONTRACT_ADDRESS,
      abi: NFTJson.abi,
    }
  }, [CONTRACT_ADDRESS])

  const { config } = usePrepareContractWrite({
    ...CONTRACT_CONFIG,
    functionName: 'safeMint',
    args: [address, nftUriRef.current],
    enabled: hasNftUri,
  })

  const { data, write } = useContractWrite(config)

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      console.log('success data', data)
      setHasNftUri(false)
      nftUriRef.current = ''
      toast({
        title: 'Transaction Successful',
        description: (
          <>
            <Text>Successfully minted your Location NFT!</Text>
            <Text>
              <Link
                href={`https://mumbai.polygonscan.com/tx/${data?.blockHash}`}
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
    },
  })

  const mintLocation = useCallback(async () => {
    try {
      // FIXME: type any
      const position: any = await getCurrentPosition()
      console.log(position)

      // Convert that position into `tokenURI` metadata
      const tokenURI = generateTokenUri(position)

      // Upload the `tokenURI` to IPFS
      const uploaded = await ipfs.add(tokenURI)

      // // This will trigger the useEffect to run the `write()` function.
      setHasNftUri(true)
      nftUriRef.current = `${IPFS_BASE_URL}/${uploaded.path}`
      console.log('nfturi: ', nftUriRef.current)
    } catch (error) {
      console.log('error', error)
    }
  }, [])

  useEffect(() => {
    if (hasNftUri && write) {
      write()
      setHasNftUri(false)
    }
  }, [hasNftUri, write])

  if (!isMounted) {
    return null
  }

  return (
    <Layout>
      <Heading as="h1" mb="8">
        Mint Location NFT
      </Heading>
      <Text mt="8" fontSize="md" color="blue">
        This page only works on the Polygon Mumbai Testnet or on a Local Chain.
      </Text>
      <Box p="8" mt="8" bg="gray.100">
        <Text fontSize="xl" textAlign="center">
          Contract Address: {CONTRACT_ADDRESS}
        </Text>
        <Divider my="8" borderColor="gray.400" />
        <Text textAlign="center">
          <Button
            colorScheme="teal"
            size="lg"
            disabled={!address || isLoading}
            onClick={mintLocation}
            isLoading={isLoading}
          >
            {address ? 'Mint Location' : 'Please Connect Your Wallet'}
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

export default Home
