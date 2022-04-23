import styled from 'styled-components/native'
import {
  Avatar,
  TextInput,
  Button,
  ActivityIndicator,
  Portal
} from 'react-native-paper'

import { colors } from '../../../../infrastructure/theme/colors'

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`
export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.spacing[3]};
`

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: 'contained'
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.spacing[2]};
`

export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
  mode: 'contained'
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.spacing[2]};
`

export const PaymentProcessingContainer = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  elevation: 999;
`

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: colors.brand.primary
})`
  z-index: 999;
`
