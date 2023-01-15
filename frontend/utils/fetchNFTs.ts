// Go to www.alchemy.com and create an account to grab your own api key!
const endpoint = process.env.NEXT_PUBLIC_MUMBAI_TESTNET_RPC

export interface NftFetchProps {
  owner?: `0x${string}` | null
  contractAddress: string
  setNFTs: Function
  filterAddresses: Array<string>
  retryAttempt: number
}

export const fetchNFTs = async ({
  owner,
  contractAddress,
  setNFTs,
  filterAddresses,
  retryAttempt,
}: NftFetchProps) => {
  if (retryAttempt === 5) {
    return
  }
  if (owner) {
    let data
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json())
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then((data) =>
          data.json()
        )
      }
    } catch (e) {
      fetchNFTs({
        owner,
        contractAddress,
        setNFTs,
        filterAddresses,
        retryAttempt: retryAttempt + 1,
      })
    }

    setNFTs(data.ownedNfts)
    return data
  }
}
