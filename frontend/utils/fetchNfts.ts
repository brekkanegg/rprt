const endpoint = process.env.NEXT_PUBLIC_MUMBAI_TESTNET_RPC

export const fetchNfts = async (address?: `0x${string}`) => {
  if (address) {
    let data
    try {
      data = await fetch(`${endpoint}/getNFTs?owner=${address}`).then((data) =>
        data.json()
      )
    } catch (e) {
      console.log(e)
    }
    return data.ownedNfts
  }
}
