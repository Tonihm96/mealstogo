import React, { useState, useEffect, useRef, useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import { Camera } from 'expo-camera'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AuthenticationContext } from '../../../services/authentication/authentication.context'

import { CameraNotFound, CameraComponent } from '../components/camera.styles'
import { Text } from '../../../components/typography/text.component'

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext)

  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.front)
  const cameraRef = useRef()

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri)
      navigation.goBack()
    }
  }

  useEffect(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status === 'granted')
  }, [])

  if (hasPermission === null || hasPermission === false) {
    return (
      <CameraNotFound>
        <Text>No access to camera</Text>
      </CameraNotFound>
    )
  }

  return (
    <CameraComponent
      ref={(camera) => (cameraRef.current = camera)}
      type={type}
      ratio='16:9'
    >
      <TouchableOpacity onPress={snap}>
        <IconButton icon='circle-slice-8' size={100} color='white' />
      </TouchableOpacity>
    </CameraComponent>
  )
}
