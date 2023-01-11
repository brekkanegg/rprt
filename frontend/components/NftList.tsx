import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState, useMemo } from 'react'
import { erc721ABI, useContractRead, useContractReads } from 'wagmi'
import { ipfs } from '../utils/ipfs'
import NFTJson from '../artifacts/contracts/BuffNFT.sol/BuffNFT.json'
import { AddressString, NftControlProps } from '../types/custom'

type NftMetadataType = {
  description: string
  image: string
  name: string
}

export const NftList = ({
  address,
  contractAddress,
}: NftControlProps): JSX.Element => {
  const [nfts, setNfts] = useState<Array<NftMetadataType>>([])

  const toast = useToast()

  const CONTRACT_CONFIG = useMemo(() => {
    return {
      address: contractAddress,
      abi: NFTJson.abi,
    }
  }, [contractAddress])

  // Gets the total number of NFTs owned by the connected address.
  const { data: nftBalanceData, refetch: refetchNftBalanceData } =
    useContractRead({
      address: contractAddress,
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

  useEffect(() => {
    if (nftTokenUris !== undefined) {
      const fetchNftData = async (ipfsHash: string) => {
        try {
          const resp = await ipfs.cat(ipfsHash)
          let content: Array<number> = []

          for await (const chunk of resp) {
            content = [...content, ...chunk]
          }

          const raw = Buffer.from(content).toString('utf8')

          return JSON.parse(raw)
        } catch (error) {
          console.log('error', error)
          toast({
            title: `${error}`,
            status: 'error',
            isClosable: true,
          })
        }
      }

      const processTokenUris = async () => {
        const nftData = await Promise.all(
          nftTokenUris.map(async (tokenUri: any = '') => {
            if (tokenUri) {
              const ipfsHash = tokenUri.replace('https://ipfs.io/ipfs/', '')
              const ipfsData = await fetchNftData(ipfsHash)
              return ipfsData
            }

            return {
              image: '',
              name: '',
            }
          })
        )

        setNfts(nftData)
      }
      console.log('Fetching NFTs...')
      processTokenUris()
    }
  }, [address, contractAddress, ipfs, nftTokenUris])

  if (nftTokenUris?.length === 0) {
    return (
      <Alert status="warning">
        <AlertIcon />
        No NFTs associated with your address: {address}
      </Alert>
    )
  }

  return (
    <div>
      <SimpleGrid my="6" columns={[1, 1, 4]} gap="6">
        {nfts.map((nft) => {
          return (
            <Flex
              key={nft.image}
              p="4"
              gap="4"
              alignItems="center"
              backgroundColor="white"
              border="1px"
              borderColor="gray.300"
            >
              <Image
                boxSize={[50, 50, 100]}
                objectFit="cover"
                src={nft.image}
                alt={nft.name}
              />
              <Box>
                <Text fontSize="xl" fontWeight="semibold" noOfLines={1}>
                  Sample Buff
                </Text>
                <Text fontSize="lg" fontWeight="semibold" noOfLines={1}>
                  Title: {nft.name}
                </Text>
                {nft.description && (
                  <Text noOfLines={[1, 2]}>Description: {nft.description}</Text>
                )}
              </Box>
            </Flex>
          )
        })}
      </SimpleGrid>
    </div>
  )
}
