import React from 'react'
import { StatusBar, SafeAreaView, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { RestaurantInfo } from '../components/restaurant-info-card.component'

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  ${StatusBar.currentHeight &&
  `padding-top: ${StatusBar.currentHeight}px;`}
`

const Search = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
`

const List = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
  flex: 1;
`

export const RestaurantsScreen = () => (
  <Container>
    <Search>
      <Searchbar />
    </Search>
    <List>
      <RestaurantInfo />
    </List>
  </Container>
)
