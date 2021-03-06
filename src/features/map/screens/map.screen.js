import React, { useState, useEffect, useContext } from 'react'
import MapView from 'react-native-maps'
import styled from 'styled-components/native'

import { LocationContext } from '../../../services/location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

import { Search } from '../components/search.component'
import { MapCallout } from '../components/map-callout.component'

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`

const RestaurantMap = ({ navigation }) => {
  const { location } = useContext(LocationContext)
  const { restaurants = [] } = useContext(RestaurantsContext)
  const { lat, lng, viewport } = location
    ? location
    : {
        lat: 41.878113,
        lng: -87.629799,
        viewport: {
          northeast: {
            lat: 41.88758823029149,
            lng: -87.6194830697085
          },
          southwest: {
            lat: 41.88489026970849,
            lng: -87.6221810302915
          }
        }
      }

  const [latDelta, setLatDelta] = useState(0)

  useEffect(() => {
    const northeastLat = viewport.northeast.lat
    const southwestLat = viewport.southwest.lat

    const latDelta = northeastLat - southwestLat

    setLatDelta(latDelta)
  }, [location, viewport])

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Map.Marker
              key={restaurant.placeId}
              title={restaurant.name}
              tappable={true}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: restaurant
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </Map.Marker>
          )
        })}
      </Map>
    </>
  )
}

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext)
  if (!location) {
    return (
      <>
        <Search />
        <Map
          region={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 1,
            longitudeDelta: 1
          }}
        />
      </>
    )
  }

  return <RestaurantMap navigation={navigation} />
}
