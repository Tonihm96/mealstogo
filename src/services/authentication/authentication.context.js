import React, { useState, createContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import {
  loginRequest,
  logoutRequest,
  registerRequest
} from './authentication.service'

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const onLogin = (email, password) => {
    setIsLoading(true)
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr)
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e.toString())
      })
  }

  const onLogout = () => {
    setIsLoading(true)
    logoutRequest().then(() => {
      setUser(null)
      setIsLoading(false)
    })
  }

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError('Error: Passwords do not match')
      return
    }
    setIsLoading(true)
    registerRequest(email, password)
      .then((usr) => {
        setUser(usr)
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(false)
        setError(e.toString())
      })
  }

  onAuthStateChanged(getAuth(), (usr) => {
    if (usr) {
      setUser(usr)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  })

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onLogout,
        onRegister
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
