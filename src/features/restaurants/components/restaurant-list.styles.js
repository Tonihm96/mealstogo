import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import { Button } from 'react-native-paper'

import { colors } from '../../../infrastructure/theme/colors'

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

export const NoResultsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const NoResults = styled(LottieView)`
  width: 75%;
`

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.spacing[2]};
  width: 80%;
  align-self: center;
`
