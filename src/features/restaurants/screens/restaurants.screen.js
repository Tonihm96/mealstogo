import React, { useContext, useState } from 'react'
import { Pressable } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import styled from 'styled-components/native'

import { theme } from '../../../infrastructure/theme'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { FadeInView } from '../../../components/animations/fade.animation'
import { Spacer } from '../../../components/spacer/spacer.component'
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component'

import { Search } from '../components/search.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { RestaurantList } from '../components/restaurant-list.styles'

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { FavouritesContext } from '../../../services/favourites/favourites.context'

const Loading = styled(ActivityIndicator)`
  flex: 1;
`

export const Restaurants = ({ navigation }) => {
  const { restaurants, isLoading, retrieveRestaurants } =
    useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)
  const [isToggled, setIsToggled] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <Loading color={theme.colors.brand.primary} size='large' />
      ) : (
        <RestaurantList
          data={restaurants}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true)
            retrieveRestaurants()
            setRefreshing(false)
          }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate('RestaurantDetail', { restaurant: item })
              }}
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Pressable>
          )}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <Spacer position='top' size='large' />}
        />
      )}
    </SafeArea>
  )
}
