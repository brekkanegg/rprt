import {
  Box,
  Button,
  Divider,
  Heading,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react'
import { create } from 'ipfs-http-client'
import type { NextPage } from 'next'
import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { LocationNFT as MUMBAI_LOCATION_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
// import NFTJson from '../artifacts/contracts/LocationNFT.sol/LocationNFT.json'
import NFTJson from '../artifacts/contracts/LocationNFT.sol/LocationNFT.json'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import { generateTokenUriFromPosition } from '../utils/generateTokenUri'
import { getCurrentPosition } from '../utils/getCurrentPosition'
import { IPFS_BASE_URL, ipfs } from '../utils/ipfs'
import { AddressString, NftControlProps } from '../types/custom'

export const NftMinter = ({ address, contractAddress }: NftControlProps) => {
  const [hasNftUri, setHasNftUri] = useState(false)
  const nftUriRef = useRef('')

  const { isMounted } = useIsMounted()

  const toast = useToast()

  // FIXME: Why use useMemo..?
  const CONTRACT_CONFIG = useMemo(() => {
    return {
      address: contractAddress,
      abi: NFTJson.abi,
    }
  }, [contractAddress])

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

  const mintLocation = useCallback(async () => {
    try {
      const position: GeolocationPosition = await getCurrentPosition()
      console.log(position)

      // Convert that position into `tokenURI` metadata
      const tokenURI = generateTokenUriFromPosition(position)

      // Upload the `tokenURI` to IPFS
      const uploaded = await ipfs.add(tokenURI)

      nftUriRef.current = `${IPFS_BASE_URL}/${uploaded.path}`

      // FIXME: 코드 왜 이렇게 짜는 거지 - 가독성 떨어지네
      // This will trigger the useEffect to run the `write()` function.
      setHasNftUri(true)
      console.log('nfturi: ', nftUriRef.current)
    } catch (error) {
      console.log('error', error)
      toast({
        title: `${error}`,
        status: 'error',
        isClosable: true,
      })
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
  )
}
