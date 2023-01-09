import { create } from 'ipfs-http-client'

export const IPFS_BASE_URL = 'https://ipfs.io/ipfs'
const projectId = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID
const projectSecret = process.env.NEXT_PUBLIC_INFURA_IPFS_APIKEY
const projectIdAndSecret = `${projectId}:${projectSecret}`

export const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(projectIdAndSecret).toString(
      'base64'
    )}`,
  },
})
