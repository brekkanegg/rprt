type UrlsType = {
  regular: string
}

type UserType = {
  username: string
}

// This data comes from the Unsplash API
// https://unsplash.com/developers
type DataType = {
  description: string
  urls: UrlsType
  user: UserType
  views: number
  width: number
  height: number
  downloads: number
}

const GMAP_API = 'https://maps.googleapis.com/maps/api/staticmap'
const GMAP_APIKEY = 'AIzaSyCXjOn7hweLxfSwQ-IaVqLPNeAT4sCD76E'
const GMAP_SIGNATURE = 'UPzNuHJpF82Ly0nADKuCwi2ErgU='

export const generateTokenUriFromPosition = (data: GeolocationPosition) => {
  const lat = data.coords.latitude
  const lon = data.coords.longitude

  const zoom = `14`
  const size = `400x400`
  const markers = `color:blue%7Clabel:H%7C${lat},${lon}`
  const staticMap = `${GMAP_API}?center=${lat},${lon}&zoom=${zoom}&size=${size}&maptype=roadmap&markers=${markers}&key=${GMAP_APIKEY}` //&signature=${GMAP_SIGNATURE}`
  console.log(staticMap)

  const tokenUri = {
    description: 'Made by brekkanegg',
    image: staticMap,
    name: `Sample Location NFT`,
    attributes: [
      {
        trait_type: 'Latitude',
        value: data.coords.latitude,
      },
      {
        trait_type: 'Longitude',
        value: data.coords.longitude,
      },
      {
        trait_type: 'Altitude',
        value: data.coords.altitude,
      },
      {
        trait_type: 'Timestamp',
        value: data.timestamp,
      },
    ],
  }

  return JSON.stringify(tokenUri)
}

export const generateTokenUriFromPhoto = (data: DataType) => {
  const tokenUri = {
    description: data.description,
    image: data.urls.regular,
    name: `Sample Buff NFT`,
    attributes: [
      {
        trait_type: 'Views',
        value: data.views,
      },
      {
        trait_type: 'Width',
        value: data.width,
      },
      {
        trait_type: 'Height',
        value: data.height,
      },
      {
        trait_type: 'Downloads',
        value: data.downloads,
      },
    ],
  }

  return JSON.stringify(tokenUri)
}
