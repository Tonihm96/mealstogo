import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Button, TextInput, ActivityIndicator } from 'react-native-paper'

import { Text } from '../../../components/typography/text.component'
import { colors } from '../../../infrastructure/theme/colors'

export const Loading = styled(ActivityIndicator).attrs({
  color: colors.brand.primary
})``

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg')
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`

export const Title = styled(Text)`
  font-size: 30px;
`

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.spacing[4]};
  margin-top: ${(props) => props.theme.spacing[2]};
`

export const ErrorContainer = styled.View`
  width: ${Dimensions.get('window').width * 0.65}px;
  margin-bottom: ${(props) => props.theme.spacing[3]};
`

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: 'contained'
})`
  padding: ${(props) => props.theme.spacing[2]};
`

export const AuthInput = styled(TextInput).attrs({})`
  width: ${Dimensions.get('window').width * 0.65}px;
`

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 10%;
`
