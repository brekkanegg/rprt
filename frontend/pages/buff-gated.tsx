import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Code,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { erc721ABI, useAccount, useContractRead } from 'wagmi'
import { BuffNFT as MUMBAI_BUFF_NFT_ADDRESS } from '../artifacts/contracts/contractAddress'
import { Layout } from '../components/layout/Layout'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'

const TokenGated: NextPage = () => {
  const { address, isConnected } = useAccount()

  const { isLocalChain } = useCheckLocalChain()

  const { isMounted } = useIsMounted()

  const CONTRACT_ADDRESS = isLocalChain
    ? MUMBAI_BUFF_NFT_ADDRESS //LOCAL_CONTRACT_ADDRESS
    : MUMBAI_BUFF_NFT_ADDRESS

  const [hasNft, setHasNft] = useState(false)

  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: erc721ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  })

  useEffect(() => {
    if (!isLoading && data && data.toNumber) {
      const numberOfNfts = data.toNumber()

      if (numberOfNfts > 0) {
        setHasNft(true)
        return
      }

      setHasNft(false)
    }
  }, [data, isLoading])

  if (!isMounted) {
    return null
  }

  const sharedDescription = (
    <>
      <Text mb="4" fontSize="lg">
        This page will check your authenticated user&apos;s address for a
        particular Buff.
      </Text>
      <Text mb="6" fontSize="lg">
        This is checking for the{' '}
        <Link
          href={`https://mumbai.polygonscan.com/token/${MUMBAI_BUFF_NFT_ADDRESS}`}
          color="teal.500"
          isExternal
        >
          Buff Token (BFT)
        </Link>{' '}
        on the POLYGON MUMBAI Testnet. You can test this at{' '}
        <NextLink href="/" passHref>
          <Link color="teal.500">Home</Link>
        </NextLink>
        .
      </Text>
    </>
  )

  if (!isConnected) {
    return (
      <Layout>
        <Heading as="h1" mb="8">
          Unauthenticated
        </Heading>
        {sharedDescription}
        <Text fontSize="lg">Please connect a wallet</Text>
      </Layout>
    )
  }

  if (isError) {
    return (
      <Layout>
        <Heading as="h1" mb="8">
          Buff Gated (WIP)
        </Heading>
        {sharedDescription}
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>
            There was an error trying to fetch your NFT.
          </AlertDescription>
        </Alert>
      </Layout>
    )
  }

  if (!hasNft) {
    return (
      <Layout>
        <Heading as="h1" mb="8">
          Buff Gated (WIP)
        </Heading>
        {sharedDescription}
        <Text mb="4" fontSize="lg">
          Authenticated as <Code colorScheme="orange">{address}</Code>
        </Text>
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle>Access Denied:</AlertTitle>
          <AlertDescription>You do not have the NFT.</AlertDescription>
        </Alert>
      </Layout>
    )
  }
  

  return (
    <Layout>
      <Heading as="h1" mb="8">
        Buff Gated (WIP)
      </Heading>
      {sharedDescription}
      <Text mb="4" fontSize="lg">
        Authenticated as: <Code colorScheme="orange">{address}</Code>
      </Text>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Access Granted:</AlertTitle>
        <AlertDescription>You have buff!</AlertDescription>
      </Alert>
    </Layout>
  )
}

export default TokenGated
