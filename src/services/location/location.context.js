import React, {
  useState,
  useEffect,
  createContext
} from 'react'

import {
  locationRequest,
  locationTransform
} from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [location, setLocation] = useState(null)
  const [keyword, setKeyword] = useState('')

  const onSearch = (searchKeyword) => {
    setIsLoading(true)
    setKeyword(searchKeyword)
    if (!searchKeyword.length) {
      return
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false)
        setLocation(result)
        console.log(result)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }

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
