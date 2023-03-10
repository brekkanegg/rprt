import {
  Box,
  Divider,
  Link,
  Heading,
  Text,
  Button,
  Center,
  SimpleGrid,
  CheckboxGroup,
  Checkbox,
  Stack,
} from '@chakra-ui/react'
import { FaFaucet } from 'react-icons/fa'
import type { NextPage } from 'next'
import { useState, useRef, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { LocationNFT as MUMBAI_LOCATION_NFT_CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import { NftMinter } from '../components/NftMinter'
import { NftCard } from '../components/NftCard'
import { fetchNfts } from '../utils/fetchNfts'

const Home: NextPage = () => {
  const { isLocalChain } = useCheckLocalChain() //FIXME: Multiple chain support
  const { address } = useAccount()

  const [NFTs, setNFTs] = useState<any>([])

  const [hideLocationNft, setHideLocationNft] = useState(false)
  const [hideBuffNft, setHideBuffNft] = useState(false)

  const [newMint, setNewMint] = useState('')

  //FIXME: Multiple chain support
  const LOCATION_NFT_CONTRACT_ADDRESS: `0x${string}` = isLocalChain
    ? MUMBAI_LOCATION_NFT_CONTRACT_ADDRESS //LOCAL_LOCATION_NFT_ADDRESS
    : MUMBAI_LOCATION_NFT_CONTRACT_ADDRESS

  const { isMounted } = useIsMounted()

  useEffect(() => {
    fetchNfts(address).then((ownedNfts) => {
      setNFTs(ownedNfts)
    })
  }, [address, newMint])

  if (!isMounted) {
    return null
  }

  return (
    <Layout>
      <Heading as="h1" mb="8">
        Buff Recipient
      </Heading>
      <Text mb="4" fontSize="lg">
        Mint your location to get buff. Check your NFTs below.
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
          1. Mint your Location NFT
        </Text>
        {/* <Text fontSize="xl" textAlign="center">
          Location NFT Contract: {LOCATION_NFT_CONTRACT_ADDRESS}
        </Text> */}
        <Divider my="4" borderColor="gray.400" />
        {
          <NftMinter
            address={address}
            contractAddress={LOCATION_NFT_CONTRACT_ADDRESS}
            setNewMint={setNewMint}
          />
        }
      </Box>
      <Divider my="4" borderColor="gray.400" />
      <Box p="8" mt="4" bg="gray.100">
        <Center mb="4" fontSize="xl">
          <Text>3. Check your NFTs:</Text>
        </Center>
        <Center mb="4" fontSize="xl">
          <CheckboxGroup>
            <Stack mx="8" spacing={5} direction="row">
              <Checkbox
                colorScheme="green"
                onChange={(e) => {
                  setHideLocationNft(e.target.checked)
                }}
              >
                Hide Location
              </Checkbox>
              <Checkbox
                colorScheme="green"
                onChange={(e) => {
                  setHideBuffNft(e.target.checked)
                }}
              >
                Hide Buff
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Center>
        <Divider my="4" borderColor="gray.400" />
        <SimpleGrid my="6" columns={[1, 1, 3]} gap="6">
          {NFTs ? (
            NFTs.filter((NFT: any) => {
              // Hide NFTs with no image
              // if (!('image' in NFT.metadata)) {
              //   return false
              // }
              if (
                hideLocationNft &&
                NFT.contractMetadata.name === 'LoCationToken'
              ) {
                return false
              }
              if (hideBuffNft && NFT.contractMetadata.name === 'BuFfToken') {
                return false
              }
              return true
            }).map((NFT: any) => {
              return (
                <NftCard
                  key={`${NFT.contract.address}_${NFT.id.tokenId}`}
                  image={NFT.media[0].gateway}
                  id={NFT.id.tokenId}
                  title={NFT.title}
                  address={NFT.contract.address}
                  description={NFT.description}
                  attributes={NFT.metadata.attributes}
                ></NftCard>
              )
            })
          ) : (
            <Box>No NFTs found</Box>
          )}
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Home
