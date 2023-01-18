import axios from 'axios'

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

    const validNfts: any[] = []

    for (let nft of data.ownedNfts) {
      // FIXME: Temporary Fe
      if (nft.error === 'IPFS gateway timed out') {
        const metadata = await axios(nft.tokenUri.raw).then(
          (response) => response.data
        )

        nft.rawMetadata = metadata
        nft.media[0].gateway = metadata.image
        nft.title = metadata.title
        nft.description = metadata.description
        nft.attributes = metadata.description

        validNfts.push(nft)
      } else {
        validNfts.push(nft)
      }
    }

    return validNfts
  }
}
