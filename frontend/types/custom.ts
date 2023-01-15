export type AddressString = `0x${string}`

export interface NftControlProps {
  address?: AddressString | null
  contractAddress: string
}
