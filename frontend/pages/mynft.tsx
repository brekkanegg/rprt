import { Box, Divider, Flex, Heading, Text, Button } from '@chakra-ui/react'

import type { NextPage } from 'next'

import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'

import { Layout } from '../components/layout/Layout'

import NftCard from '../components/NftCard'
import { fetchNFTs } from '../utils/fetchNFTs'

const MyNFTs: NextPage = () => {
  // const [owner, setOwner] = useState('')
  const { address } = useAccount()

  const [contractAddress, setContractAddress] = useState('')
  const [NFTs, setNFTs] = useState<any>([])

  const filterAddresses = ['']

  useEffect(() => {
    fetchNFTs({
      address,
      contractAddress,
      setNFTs,
      filterAddresses,
      retryAttempt: 1,
    })
  }, [address, contractAddress, filterAddresses])

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
                  fetchNFTs({
                    address,
                    contractAddress,
                    setNFTs,
                    filterAddresses,
                    retryAttempt: 1,
                  })
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
