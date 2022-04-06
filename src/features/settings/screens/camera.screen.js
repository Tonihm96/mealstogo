import React, { useState, useEffect, useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import { Camera } from 'expo-camera'

import { CameraNotFound, CameraComponent } from '../components/camera.styles'
import { Text } from '../../../components/typography/text.component'

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.front)
  const cameraRef = useRef()

  useEffect(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setHasPermission(status === 'granted')
  }, [])

  if (hasPermission === null || hasPermission === false) {
    return (
      <CameraNotFound>
        <Text>Camera not found</Text>
      </CameraNotFound>
    )
  }

  return (
    <CameraComponent ref={(camera) => (cameraRef.current = camera)} type={type}>
      <TouchableOpacity>
        <IconButton icon='circle-slice-8' size={100} color='white' />
      </TouchableOpacity>
    </CameraComponent>
  )
}
