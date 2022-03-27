import React from 'react'
import 'react-native-gesture-handler'
import {
  createNativeStackNavigator,
  TransitionPresets
} from '@react-navigation/native-stack'

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
        options={{
          presentation: 'modal',
          gestureEnabled: true,
          gestureDirection: 'vertical'
        }}
        name='RestaurantDetail'
        component={RestaurantDetail}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  )
}
