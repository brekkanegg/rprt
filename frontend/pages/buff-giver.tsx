import {
  Box,
  Divider,
  Link,
  Heading,
  Text,
  Button,
  Center,
  Flex,
  useToast,
} from '@chakra-ui/react'
import { FaFaucet } from 'react-icons/fa'

import type { NextPage } from 'next'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useAccount } from 'wagmi'

import { Layout } from '../components/layout/Layout'

import { BuffNFT as MUMBAI_BUFF_NFT_CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'

import { EditableContract } from '../components/EditableContract'
import { NftDropper } from '../components/NftDropper'

const MyNFTs: NextPage = () => {
  const { isLocalChain } = useCheckLocalChain()
  const { address } = useAccount()

  const updatedBuffContractRef = useRef(false)

  const BUFF_NFT_CONTRACT_ADDRESS: string = isLocalChain
    ? MUMBAI_BUFF_NFT_CONTRACT_ADDRESS //LOCAL_BUFF_NFT_ADDRESS
    : MUMBAI_BUFF_NFT_CONTRACT_ADDRESS
  const [buffContract, setBuffContract] = useState(BUFF_NFT_CONTRACT_ADDRESS)

  useEffect(() => {
    if (updatedBuffContractRef.current) return

    updatedBuffContractRef.current = true
    const sessionNftContract = window.localStorage.getItem('BuffContract')
    if (sessionNftContract !== null) {
      setBuffContract(sessionNftContract)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('BuffContract', buffContract)
  }, [buffContract])

  return (
    <Layout>
      <Heading as="h1" mb="8">
        Buff Giver
      </Heading>
      <Text mb="4" fontSize="lg">
        Give buff to nearby users those are within your time, distance radius.
      </Text>
      <Text mt="8" fontSize="md" color="blue">
        This page only works on the Polygon Mumbai Testnet.
      </Text>
      <Button mt="2" colorScheme="blue" leftIcon={<FaFaucet />}>
        <Center>
          <Link href="https://mumbaifaucet.com/">Go to Mumbai faucet</Link>
        </Center>
      </Button>
      <Box p="8" mt="4" bg="gray.100">
        <Text fontSize="xl" textAlign="center">
          Buff NFT Contract:
        </Text>
        <Text fontSize="xl" textAlign="center">
          {buffContract}
        </Text>
        <EditableContract
          nftContract={buffContract}
          setContractAddress={setBuffContract}
        />
        <Divider my="4" borderColor="gray.400" />
        {<NftDropper address={address} contractAddress={buffContract} />}
      </Box>
    </Layout>
  )
}

export default MyNFTs
