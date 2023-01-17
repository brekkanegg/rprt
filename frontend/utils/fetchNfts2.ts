import { NftControlProps } from '../types/custom'

// Go to www.alchemy.com and create an account to grab your own api key!
const endpoint = process.env.NEXT_PUBLIC_MUMBAI_TESTNET_RPC

export const fetchNfts = async ({
  address,
  contractAddress,
}: NftControlProps) => {
  if (address) {
    let data
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${address}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json())
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${address}`).then(
          (data) => data.json()
        )
      }
    } catch (e) {
      console.log(e)
    }

    return data.ownedNfts
    // setNFTs(data.ownedNfts)
    // return data
  }
}
