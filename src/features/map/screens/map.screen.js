import React from 'react'
import { Text, Button, View } from 'react-native'

const setTest = () => {
  var test = 1
  test++
}

export const Map = () => (
  <View>
    <Button title='teste' onPress={setTest} />
  </View>
)
