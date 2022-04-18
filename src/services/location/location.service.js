import camelize from 'camelize'
import { host, isMock } from '../../utils/env'

export const currentLocationRequest = (location) => {
  /*return fetch(
    `${host}/reverseGeocode?location=${location}&mock=${isMock}`
  ).then((res) => {
    return res.json()
  })*/
  /*const locationString = `${location.lat},${location.lng}`
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationString}&result_type=political&location_type=APPROXIMATE&key=${}`
  ).then((res) => {
    return res.results[0].address_components[0].long_name.json()
  })*/
}

export const locationRequest = (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
    (res) => {
      return res.json()
    }
  )
}

export const locationTransform = (result) => {
  if (!result) {
    result = {
      lat: 0,
      lng: 0,
      viewport: {
        northeast: {
          lat: 0,
          lng: 0
        },
        southwest: {
          lat: 0,
          lng: 0
        }
      }
    }

    return result
  }

  const formattedResponse = camelize(result)
  const { geometry = {} } = formattedResponse.results[0]
  const { lat, lng } = geometry.location

  return { lat, lng, viewport: geometry.viewport }
}
