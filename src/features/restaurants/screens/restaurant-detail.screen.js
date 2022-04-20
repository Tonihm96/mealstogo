import React, { useState, useContext } from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

import { CartContext } from '../../../services/cart/cart.context'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { OrderButton } from '../components/restaurant-list.styles'

export const RestaurantDetail = ({ navigation, route }) => {
  const { addToCart } = useContext(CartContext)
  const { restaurant } = route.params
  const [breakfastExpanded, setBreakfastExpanded] = useState(false)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          id='1'
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          left={() => <List.Icon icon='bread-slice' />}
        >
          <List.Item title='Fried Eggs' />
          <List.Item title='Waffles' />
          <List.Item title='Pancakes' />
        </List.Accordion>
        <List.Accordion
          title='Lunch'
          id='2'
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          left={() => <List.Icon icon='hamburger' />}
        >
          <List.Item title='Chiken Breast' />
          <List.Item title='Beef' />
          <List.Item title='Rice' />
        </List.Accordion>
        <List.Accordion
          title='Dinner'
          id='3'
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          left={() => <List.Icon icon='food-variant' />}
        >
          <List.Item title='Pasta' />
          <List.Item title='Spaghetti & Meatballs' />
          <List.Item title='Soup' />
        </List.Accordion>
        <List.Accordion
          title='Drinks'
          id='4'
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          left={() => <List.Icon icon='cup' />}
        >
          <List.Item title='Beer' />
          <List.Item title='Tea' />
          <List.Item title='Juice' />
        </List.Accordion>
      </ScrollView>
      <Spacer position='bottom' size='large'>
        <OrderButton
          icon='cash-usd'
          mode='contained'
          onPress={() => {
            addToCart({ item: 'special', price: 1299 }, restaurant)
            navigation.navigate('Checkout')
          }}
        >
          Order Special Only R$12,99
        </OrderButton>
      </Spacer>
    </SafeArea>
  )
}
