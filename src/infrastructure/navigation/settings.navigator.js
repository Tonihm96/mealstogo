import React, { useEffect } from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import { SettingsScreen } from '../../features/settings/screens/settings.screen'
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen'
import { CameraScreen } from '../../features/settings/screens/camera.screen'

const SettingsStack = createStackNavigator()

const screenOptions = {
  headerShown: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions}>
      <SettingsStack.Screen
        options={{ header: () => null }}
        name='SettingsScreen'
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{ title: 'Favourites' }}
        name='FavouritesScreen'
        component={FavouritesScreen}
      />
      <SettingsStack.Screen
        options={{ title: 'Camera' }}
        name='CameraScreen'
        component={CameraScreen}
      />
    </SettingsStack.Navigator>
  )
}
