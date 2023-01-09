import { Container, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import NextLink from 'next/link'
import React from 'react'
import { Head, MetaProps } from './Head'

interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

export const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <Container maxWidth="container.xl">
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            alignItems="center"
            justifyContent="space-between"
            py="8"
          >
            <Flex py={[4, null, null, 0]}>
              <NextLink href="/" passHref legacyBehavior>
                <Link px="4" py="1">
                  Enter BUFF
                </Link>
              </NextLink>
              <NextLink href="/buff" passHref legacyBehavior>
                <Link px="4" py="1">
                  Spread BUFF
                </Link>
              </NextLink>
              <NextLink href="/buff-gated" passHref legacyBehavior>
                <Link px="4" py="1">
                  BUFF Gated
                </Link>
              </NextLink>
            </Flex>
            <Flex
              order={[-1, null, null, 2]}
              alignItems={'center'}
              justifyContent={['flex-start', null, null, 'flex-end']}
            >
              <ConnectButton />
            </Flex>
          </SimpleGrid>
        </Container>
      </header>
      <main>
        <Container maxWidth="container.xl">{children}</Container>
      </main>
      <footer>
        <Container mt="8" py="8" maxWidth="container.xl">
          <Text mb="4">
            Copyright © 2023{' '}
            <Link href="https://twitter.com/DALLO_NFT">DALLO</Link>, Inc. All
            rights reserved.
          </Text>
          {/* <LocalFaucetButton /> */}
        </Container>
      </footer>
    </>
  )
}
