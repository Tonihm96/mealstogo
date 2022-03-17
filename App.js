import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular
} from '@expo-google-fonts/lato'
import { SafeArea } from './src/components/utility/safe-area.component'
import { theme } from './src/infrastructure/theme'
import { Restaurants } from './src/features/restaurants/screens/restaurants.screen'
//import { Map } from './src/features/map/screens/map.screen'

const Map = () => (
  <SafeArea>
    <Text>teste</Text>
  </SafeArea>
)
const Settings = () => (
  <SafeArea>
    <Text>teste</Text>
  </SafeArea>
)

const Tab = createBottomTabNavigator()

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
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name='Restaurants'
              component={Restaurants}
            />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen
              name='Settings'
              component={Settings}
            />
          </Tab.Navigator>
          <ExpoStatusBar style='auto' />
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}
