import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Restaurants } from '../../features/restaurants/screens/restaurants.screen'

const RestaurantStack = createNativeStackNavigator()

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        options={{ headerShown: false }}
        name='Restaurants'
        component={Restaurants}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  )
}
