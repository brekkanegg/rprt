export const generateTokenUri = (data: GeolocationPosition) => {
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
