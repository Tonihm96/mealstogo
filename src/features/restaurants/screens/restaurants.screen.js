import React, { useContext } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const Search = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
`

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

export const Restaurants = () => {
  const { restaurants, isLoading, error } = useContext(
    RestaurantsContext
  )

  return (
    <SafeArea>
      <Search>
        <Searchbar />
      </Search>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item)
          return <RestaurantInfoCard restaurant={item} />
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  )
}
