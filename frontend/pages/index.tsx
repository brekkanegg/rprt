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
import { ethers, providers } from 'ethers'
import type { NextPage } from 'next'
import { useReducer, useEffect } from 'react'
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useWaitForTransaction,
} from 'wagmi'
import { LocationNFT as LOCAL_CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import LocationNFT from '../artifacts/contracts/LocationNFT.sol/LocationNFT.json'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import { LocationNFT as LocationNFTType } from '../types/typechain'

/**
 * Constants & Helpers
 */

const localProvider = new providers.StaticJsonRpcProvider(
  'http://localhost:8545'
)

const GOERLI_CONTRACT_ADDRESS = '0x3B73833638556f10ceB1b49A18a27154e3828303'



const Home: NextPage = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)

  const { isLocalChain } = useCheckLocalChain()

  const { isMounted } = useIsMounted()

  const CONTRACT_ADDRESS = isLocalChain
    ? LOCAL_CONTRACT_ADDRESS
    : GOERLI_CONTRACT_ADDRESS

  const { address } = useAccount()

  const provider = useProvider()

  const toast = useToast()

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: LocationNFT.abi,
    functionName: 'safeMint',
    args: [CONTRACT_ADDRESS, address],
    enabled: true,
  })

  const { data, write } = useContractWrite(config)

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      console.log('success data', data)
      toast({
        title: 'Transaction Successful',
        description: (
          <>
            <Text>Successfully updated the Greeting!</Text>
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

  // call the smart contract, read the current greeting value
  async function mintItem() {
    if (provider) {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        LocationNFT.abi,
        provider
      ) as LocationNFTType
      try {
        // const data = await contract.safeMint()
        // dispatch({ type: 'SET_GREETING', greeting: data })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Error: ', err)
      }
    }
  }

  // useEffect(() => {
  //   if (write) {
  //     write()
  //   }
  // }, [write])

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
            onClick={mintItem}
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
