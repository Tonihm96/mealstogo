import React, { useState, useEffect, createContext } from 'react'

import { locationRequest, locationTransform } from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [keyword, setKeyword] = useState('3213¬¢¬¢¢¬¢GSUYGAyusgUAYGSa8756')

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
