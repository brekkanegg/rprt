import { ChakraProvider } from '@chakra-ui/react'
import {
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import { hasUncaughtExceptionCaptureCallback } from 'process'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import '../styles/globals.css'

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_MUMBAI_ALCHEMY_APIKEY || ''

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.polygonMumbai]
      : []),
  ],
  [
    alchemyProvider({
      apiKey: ALCHEMY_API_KEY,
    }),
    publicProvider(),
  ]
)

const { wallets } = getDefaultWallets({
  appName: 'RPRT demo',
  chains,
})

const demoAppInfo = {
  appName: 'RPRT Demo',
}

const connectors = connectorsForWallets(wallets)

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        theme={darkTheme({
          borderRadius: 'small',
        })}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
