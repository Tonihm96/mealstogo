import React, { useState, createContext, useEffect, useContext } from 'react'

import { restaurantsRequest, restaurantsTransform } from './restaurants.service'

import { LocationContext } from '../location/location.context'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { location } = useContext(LocationContext)

  const retrieveRestaurants = (loc) => {
    setIsLoading(true)
    setRestaurants([])
    console.log(loc)
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setError(null)
        setRestaurants(results)
        setIsLoading(false)
      })
      .catch((error) => {
        setRestaurants([])
        setError(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`
      retrieveRestaurants(locationString)
    }
  }, [location])

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        retrieveRestaurants
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
}
