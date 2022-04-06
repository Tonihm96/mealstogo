import styled from 'styled-components/native'
import { Camera } from 'expo-camera'

export const CameraNotFound = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CameraComponent = styled(Camera)`
  flex: 1;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[3]};
  justify-content: flex-end;
  align-items: center;
`
