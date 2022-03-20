import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
  useFonts as useLato,
  Lato_400Regular
} from '@expo-google-fonts/lato'
import { theme } from './src/infrastructure/theme'
import { Restaurants } from './src/features/restaurants/screens/restaurants.screen'
import { Map } from './src/features/map/screens/map.screen'
import { Settings } from './src/features/settings/screens/settings.screen'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: 'restaurant',
  Map: 'map',
  Settings: 'settings'
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'grey',
    headerShown: false
  }
}

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
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
            >
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
        </RestaurantsContextProvider>
      </ThemeProvider>
    </>
  )
}
