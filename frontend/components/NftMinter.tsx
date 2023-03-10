import { Button, Link, Text, useToast } from '@chakra-ui/react'
import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import NFTJson from '../artifacts/contracts/LocationNFT.sol/LocationNFT.json'
import { useIsMounted } from '../hooks/useIsMounted'
import { generateTokenUriFromPosition } from '../utils/generateTokenUri'
import { getCurrentPosition } from '../utils/getCurrentPosition'
import { IPFS_BASE_URL, ipfs } from '../utils/ipfs'
import { NftControlProps } from '../types/custom'

interface NftControlPropsExtend extends NftControlProps {
  setNewMint: Function
}

export const NftMinter = ({
  address,
  contractAddress,
  setNewMint,
}: NftControlPropsExtend) => {
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
      setNewMint(nftUriRef.current)
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

      // FIXME: ?????? ??? ????????? ?????? ?????? - ????????? ????????????
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
      // Nft list Fetch ?????? ?????????
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
        {address ? 'Mint' : 'Please Connect Your Wallet'}
      </Button>
    </Text>
  )
}
