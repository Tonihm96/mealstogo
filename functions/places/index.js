const { mocks, addMockImage } = require('./mock')
const url = require('url')
const functions = require('firebase-functions')

const addGoogleImage = (restaurant) => {
  if (!restaurant.photos) {
    restaurant.photos = [
      'https://xn--80aadc3bb0afph5eue.xn--p1ai/images/no_photo.png'
    ]
    return restaurant
  }

  const ref = restaurant.photos[0].photo_reference

  if (!ref) {
    restaurant.photos = [
      'https://xn--80aadc3bb0afph5eue.xn--p1ai/images/no_photo.png'
    ]
    return restaurant
  }

  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${ref}&key=${
      functions.config().google.key
    }`
  ]

  return restaurant
}

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query

  if (mock === 'true') {
    const data = mocks[location]
    if (data) {
      data.results = data.results.map(addMockImage)
    }
    return response.json(data)
  }

  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: 'restaurant',
        key: functions.config().google.key
      },
      timeout: 1000
    })
    .then((res) => {
      res.data.results = res.data.results.map(addGoogleImage)
      return response.json(res.data)
    })
    .catch((err) => {
      response.status(400)
      return response.send(err.response.data.error_message)
    })
}
