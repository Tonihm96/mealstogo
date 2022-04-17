import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

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
