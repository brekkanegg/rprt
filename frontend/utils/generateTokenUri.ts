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

export const generateTokenUriFromPosition = (data: GeolocationPosition) => {
  const formattedDate = new Date(data.timestamp).toString() //toUTCString

  const lat = data.coords.latitude
  const lon = data.coords.longitude

  // const zoom = `14`
  // const size = `400x400`
  // const markers = `color:blue%7Clabel:H%7C${lat},${lon}`
  // const staticMap = `${GMAP_API}?center=${lat},${lon}&zoom=${zoom}&size=${size}&maptype=roadmap&markers=${markers}&key=${GMAP_APIKEY}` //&signature=${GMAP_SIGNATURE}`
  // console.log(staticMap)

  const mapImage =
    'https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80'

  const tokenUri = {
    description: 'Made by brekkanegg',
    image: mapImage,
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
        value: formattedDate,
      },
    ],
  }

  return JSON.stringify(tokenUri)
}

export const generateTokenUriFromPhoto = (data: DataType) => {
  const buffImage =
    'https://images.unsplash.com/photo-1476018040064-32e98fec7648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969&q=80'
  const tokenUri = {
    description: data.description,
    image: buffImage, //data.urls.regular,
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
