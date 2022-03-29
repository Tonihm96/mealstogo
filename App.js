import 'react-native-gesture-handler'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { initializeApp, getApps } from 'firebase/app'

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'

import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { theme } from './src/infrastructure/theme'
import { Navigation } from './src/infrastructure/navigation'

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context'

const firebaseConfig = {
  apiKey: 'AIzaSyCt5h2lShgeB5h6zjHjJ4jLWj96Q5DGlAs',
  authDomain: 'mealstogo-7c4a7.firebaseapp.com',
  projectId: 'mealstogo-7c4a7',
  storageBucket: 'mealstogo-7c4a7.appspot.com',
  messagingSenderId: '363393736823',
  appId: '1:363393736823:web:1d4f4e40d139bc8d9b2672',
  measurementId: 'G-5QT646H9V8'
}

if (!getApps().length) initializeApp(firebaseConfig)

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })
  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded) return null

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  )
}
