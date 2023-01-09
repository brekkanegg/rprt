function getPositionWrapper() {
  // Simple wrapper
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej)
  })
}

export const getCurrentPosition = async () => {
  const position = await getPositionWrapper()
  if (position instanceof GeolocationPosition) {
    return position
  } else throw Error('Position should be geolocation')
}
