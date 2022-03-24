import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { theme } from '../theme'
import { Map } from '../../features/map/screens/map.screen'
import { Restaurants } from '../../features/restaurants/screens/restaurants.screen'
import { Settings } from '../../features/settings/screens/settings.screen'

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
    tabBarActiveTintColor: theme.colors.brand.primary,
    tabBarInactiveTintColor: theme.colors.ui.secondary,
    headerShown: false
  }
}

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name='Restaurants' component={Restaurants} />
      <Tab.Screen name='Map' component={Map} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
)
