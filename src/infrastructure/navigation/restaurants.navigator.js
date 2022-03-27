import React from 'react'

import {
  createStackNavigator,
  TransitionSpecs,
  TransitionPresets
} from '@react-navigation/stack'

import { Restaurants } from '../../features/restaurants/screens/restaurants.screen'
import { RestaurantDetail } from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createStackNavigator()

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
        options={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          animation: 'slide_from_bottom',
          presentation: 'modal'
        }}
        name='RestaurantDetail'
        component={RestaurantDetail}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  )
}
