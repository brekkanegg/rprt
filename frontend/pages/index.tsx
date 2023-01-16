import {
  Box,
  Divider,
  Link,
  Heading,
  Text,
  Button,
  Center,
} from '@chakra-ui/react'
import { FaFaucet } from 'react-icons/fa'
import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import { useAccount } from 'wagmi'

import { LocationNFT as MUMBAI_LOCATION_NFT_CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import { BuffNFT as MUMBAI_BUFF_NFT_CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import { NftMinter } from '../components/NftMinter'
import { EditableContract } from '../components/EditableContract'
import { NftDropper } from '../components/NftDropper'
import { AddressString, NftControlProps } from '../types/custom'

const Home: NextPage = () => {
  const { isLocalChain } = useCheckLocalChain() //FIXME: Multiple chain support
  const { address } = useAccount()

  const updatedBuffContractRef = useRef(false)

  // FIXME:
  const LOCATION_NFT_CONTRACT_ADDRESS: AddressString = isLocalChain
    ? MUMBAI_LOCATION_NFT_CONTRACT_ADDRESS //LOCAL_LOCATION_NFT_ADDRESS
    : MUMBAI_LOCATION_NFT_CONTRACT_ADDRESS
  const [locContract, setLocContract] = useState<AddressString>(
    LOCATION_NFT_CONTRACT_ADDRESS
  )

  const BUFF_NFT_CONTRACT_ADDRESS: string = isLocalChain
    ? MUMBAI_BUFF_NFT_CONTRACT_ADDRESS //LOCAL_BUFF_NFT_ADDRESS
    : MUMBAI_BUFF_NFT_CONTRACT_ADDRESS
  const [buffContract, setBuffContract] = useState(BUFF_NFT_CONTRACT_ADDRESS)

  const { isMounted } = useIsMounted()

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

  if (!isMounted) {
    return null
  }

  return (
    <Layout>
      <Heading as="h1" mb="8">
        Right Place at the Right Time
      </Heading>
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
          Location NFT Contract:
        </Text>
        <Text fontSize="xl" textAlign="center">
          {LOCATION_NFT_CONTRACT_ADDRESS}
        </Text>
        <Divider my="4" borderColor="gray.400" />
        {<NftMinter address={address} contractAddress={locContract} />}
      </Box>
      <Box p="8" mt="4" bg="gray.100">
        <Text fontSize="xl" textAlign="center">
          Buff NFT Contract:
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

export default Home
