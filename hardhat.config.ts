import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/config';

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: '0.8.17',
  paths: {
    artifacts: './frontend/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337, // We set 1337 to make interacting with MetaMask simpler
    },
    mumbai: {
      url: process.env.NEXT_PUBLIC_MUMBAI_TESTNET_RPC,
      accounts: [process.env.METAMASK_PRIVATE_KEY || ""],
    },
  },
  typechain: {
    outDir: './frontend/types/typechain',
  },
};

export default config;
