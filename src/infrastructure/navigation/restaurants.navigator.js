import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Restaurants } from '../../features/restaurants/screens/restaurants.screen'
import { RestaurantDetail } from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createNativeStackNavigator()

const screenOptions = {
  headerShown: false
}

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={screenOptions}>
      <RestaurantStack.Screen
        name='RestaurantsScreen'
        component={Restaurants}
      ></RestaurantStack.Screen>
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetail}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  )
}
