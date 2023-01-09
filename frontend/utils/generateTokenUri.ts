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
  const tokenUri = {
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
    name: data.user.username,
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
