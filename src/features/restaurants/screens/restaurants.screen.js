import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar
} from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { RestaurantInfo } from '../components/restaurant-info-card.component'

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  padding-top: ${StatusBar.currentHeight};
`

const Search = styled.View`
  padding: 16px;
`

const List = styled.View`
  padding: 16px;
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
