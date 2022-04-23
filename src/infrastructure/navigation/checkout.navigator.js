import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import { CheckoutScreen } from '../../features/checkout/screens/checkout.screen'
import { CheckoutSuccessScreen } from '../../features/checkout/screens/checkout-success.screen'
import { CheckoutErrorScreen } from '../../features/checkout/screens/checkout-error.screen'

const CheckoutStack = createStackNavigator()

const screenOptions = {
  headerShown: false
}

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator screenOptions={screenOptions}>
      <CheckoutStack.Screen name='Checkout' component={CheckoutScreen} />
      <CheckoutStack.Screen
        name='CheckoutSuccess'
        component={CheckoutSuccessScreen}
      />
      <CheckoutStack.Screen
        name='CheckoutError'
        component={CheckoutErrorScreen}
      />
    </CheckoutStack.Navigator>
  )
}
