import camelize from 'camelize'

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://localhost:5001/mealstogo-7c4a7/us-central1/geocode?city=${searchTerm}`
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.error(err)
    })
}

export const locationTransform = (result) => {
  const formattedResponse = camelize(result)
  const { geometry = {} } = formattedResponse.results[0]
  const { lat, lng } = geometry.location

  return { lat, lng, viewport: geometry.viewport }
}
