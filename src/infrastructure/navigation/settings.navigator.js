import React, { useEffect } from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import { SettingsScreen } from '../../features/settings/screens/settings.screen'
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen'
import { FavouriteDetailsScreen } from '../../features/settings/screens/favourite-detail.screen'
import { CameraScreen } from '../../features/settings/screens/camera.screen'

const SettingsStack = createStackNavigator()

const screenOptions = {
  headerShown: true
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
        options={{
          title: 'Favourites',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
        name='FavouritesScreen'
        component={FavouritesScreen}
      />
      <SettingsStack.Screen
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'vertical',
          animation: 'slide_from_bottom',
          presentation: 'modal'
        }}
        name='FavouriteDetailsScreen'
        component={FavouriteDetailsScreen}
      />
      <SettingsStack.Screen
        options={{
          title: 'Camera',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
        name='CameraScreen'
        component={CameraScreen}
      />
    </SettingsStack.Navigator>
  )
}
