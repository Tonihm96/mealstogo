import React, { useState, useEffect, createContext } from 'react'
import * as Location from 'expo-location'

import {
  currentLocationRequest,
  locationRequest,
  locationTransform
} from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [keyword, setKeyword] = useState('Joaçaba')

  /*useEffect(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.error('Location permission denied')
      return
    }

    let curLocation = await Location.getCurrentPositionAsync({}).then()

    let exctractedLocation = {
      lat: curLocation.coords.latitude,
      lng: curLocation.coords.longitude,
      viewport: {
        northeast: {
          lat: curLocation.coords.latitude,
          lng: curLocation.coords.longitude
        },
        southwest: {
          lat: curLocation.coords.latitude,
          lng: curLocation.coords.longitude
        }
      }
    }

    setLocation(exctractedLocation)
    //setKeyword()
  }, [])*/

  const onSearch = (searchKeyword) => {
    setIsLoading(true)
    setKeyword(searchKeyword)
  }

  useEffect(() => {
    if (!keyword.length) {
      return
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setError(null)
        setIsLoading(false)
        setLocation(result)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
