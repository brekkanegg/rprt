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

// 오... 한 번 고고싱 temp 삭제해버리기

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_MUMBAI_ALCHEMY_API_KEY || ''

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.localhost]
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
  appName: 'RainbowKit demo',
  chains,
})

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
}

const connectors = connectorsForWallets(wallets)

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})
