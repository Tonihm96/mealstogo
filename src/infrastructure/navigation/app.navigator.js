import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { theme } from '../theme'
import { MapScreen } from '../../features/map/screens/map.screen'
import { Settings } from '../../features/settings/screens/settings.screen'

import { RestaurantsNavigator } from './restaurants.navigator'

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
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
    <Tab.Screen name='Map' component={MapScreen} />
    <Tab.Screen name='Settings' component={Settings} />
  </Tab.Navigator>
)
