import React, { useEffect } from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import { SettingsScreen } from '../../features/settings/screens/settings.screen'

const SettingsStack = createStackNavigator()

const screenOptions = {
  headerShown: true,
  gestureEnabled: true,
  gestureDirection: 'vertical',
  animation: 'slide_from_bottom',
  presentation: 'modal'
}

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions}>
      <SettingsStack.Screen
        options={{ header: () => null }}
        name='SettingsScreen'
        component={SettingsScreen}
      />
      <SettingsStack.Screen name='Favourites' component={() => null} />
    </SettingsStack.Navigator>
  )
}
