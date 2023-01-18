export type AddressString = `0x${string}`

export interface NftControlProps {
  address?: `0x${string}` | null
  contractAddress: string
}
