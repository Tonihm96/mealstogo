import camelize from 'camelize'

export const restaurantsRequest = (location) => {
  return fetch(
    `https://us-central1-mealstogo-7c4a7.cloudfunctions.net/placesNearby?location=${location}`
  )
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.error(err)
    })
}

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
    }
  })

  return camelize(mappedResults)
}
