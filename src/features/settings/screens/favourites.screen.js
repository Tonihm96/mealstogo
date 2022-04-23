import React, { useContext } from 'react'
import { Pressable } from 'react-native'
import styled from 'styled-components/native'

import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component'
import { RestaurantList } from '../../restaurants/components/restaurant-list.styles'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

import { FavouritesContext } from '../../../services/favourites/favourites.context'

const NotFound = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext)

  return favourites.length ? (
    <RestaurantList
      data={favourites}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate('RestaurantDetail', { restaurant: item })
          }}
        >
          <RestaurantInfoCard restaurant={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={() => <Spacer position='top' size='large' />}
    />
  ) : (
    <NotFound>
      <Text>No favourites yet</Text>
    </NotFound>
  )
}
