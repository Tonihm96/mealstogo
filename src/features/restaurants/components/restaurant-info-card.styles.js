import styled from 'styled-components/native'
import { Card } from 'react-native-paper'

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`

export const RestaurantCardContent = styled(Card.Content)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`

export const Section = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const InfoIcons = styled.View`
  align-items: center;
  flex-direction: row;
`

export const RatingView = styled.View`
  flex-direction: row;
`
