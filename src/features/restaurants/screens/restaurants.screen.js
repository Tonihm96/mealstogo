import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import styled from 'styled-components/native'

import { theme } from '../../../infrastructure/theme'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { Search } from '../components/search.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16
  }
})``

const Loading = styled(ActivityIndicator)`
  flex: 1;
`

export const Restaurants = ({ navigation }) => {
  const { restaurants, isLoading, error, retrieveRestaurants } =
    useContext(RestaurantsContext)
  const [refreshing, setRefreshing] = useState(false)

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <Loading color={theme.colors.brand.primary} size='large' />
      ) : (
        <RestaurantList
          onRefresh={() => {
            setRefreshing(true)
            retrieveRestaurants()
            setRefreshing(false)
          }}
          refreshing={refreshing}
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }}
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  )
}
