import { Box, Divider, Heading, Text, Button, useToast } from '@chakra-ui/react'

import type { NextPage } from 'next'

import { useState, useEffect, useCallback } from 'react'
import { useAccount } from 'wagmi'

import { Layout } from '../components/layout/Layout'

import NftCard from '../components/NftCard'
// import { fetchNFTs } from '../utils/fetchNFTs'

const MyNFTs: NextPage = () => {
  // const [owner, setOwner] = useState('')
  const { address } = useAccount()
  const [contractAddress, setContractAddress] = useState('')
  const [NFTs, setNFTs] = useState<any>([])

  const toast = useToast()

  // const filterAddresses = ['']

  const fetchNFTs = useCallback(async () => {
    if (address) {
      let data
      try {
        if (contractAddress) {
          data = await fetch(
            `${process.env.NEXT_PUBLIC_MUMBAI_TESTNET_RPC}/getNFTs?owner=${address}&contractAddresses%5B%5D=${contractAddress}`
          ).then((data) => data.json())
        } else {
          data = await fetch(
            `${process.env.NEXT_PUBLIC_MUMBAI_TESTNET_RPC}/getNFTs?owner=${address}`
          ).then((data) => data.json())
        }
      } catch (error) {
        console.log(error)
        toast({
          title: `${error}`,
          status: 'error',
          isClosable: true,
        })
      }

      setNFTs(data.ownedNfts)
      return data
    }
  }, [address, contractAddress])

  useEffect(() => {
    fetchNFTs()
  }, [address, contractAddress])

  return (
    <Layout>
      <Heading as="h1" mb="8">
        My NFT List:{' '}
      </Heading>
      <Text mt="8" fontSize="md" color="blue">
        This page only works on the Polygon Mumbai Testnet.
      </Text>

      <div>
        <Box p="8" mt="4" bg="gray.100">
          <div className="flex flex-col items-center mb-12 pt-12  w-full   alchemy">
            <div className="flex flex-col items-center justify-center mb-4 w-2/6 gap-y-2 ">
              <input
                className="focus:outline-none rounded-sm py-2 px-3 w-full"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
                placeholder="Filter by NFT Contract address (optional)"
              ></input>
            </div>
            <div className="w-2/6 flex justify-center">
              <Button
                className="py-3 bg-white rounded-sm w-full hover:bg-slate-100"
                colorScheme="teal"
                size="lg"
                disabled={!address}
                onClick={() => {
                  fetchNFTs()
                }}
                // isLoading={isLoading}
              >
                Filter
              </Button>
            </div>
          </div>
        </Box>

        <Divider my="4" borderColor="gray.400" />
        <Box className="flex flex-wrap justify-center">
          {NFTs ? (
            NFTs.map((NFT: any) => {
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
            <div>No NFTs found</div>
          )}
        </Box>
      </div>
    </Layout>
  )
}

export default MyNFTs
