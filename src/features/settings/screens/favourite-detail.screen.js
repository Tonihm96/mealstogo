import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { List, Divider } from 'react-native-paper'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component'

export const FavouriteDetailsScreen = ({ route }) => {
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
          <Divider />
          <List.Item title='Waffles' />
          <Divider />
          <List.Item title='Pancakes' />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title='Lunch'
          id='2'
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          left={() => <List.Icon icon='hamburger' />}
        >
          <List.Item title='Chiken Breast' />
          <Divider />
          <List.Item title='Beef' />
          <Divider />
          <List.Item title='Rice' />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title='Dinner'
          id='3'
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          left={() => <List.Icon icon='food-variant' />}
        >
          <List.Item title='Pasta' />
          <Divider />
          <List.Item title='Spaghetti & Meatballs' />
          <Divider />
          <List.Item title='Soup' />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title='Drinks'
          id='4'
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          left={() => <List.Icon icon='cup' />}
        >
          <List.Item title='Beer' />
          <Divider />
          <List.Item title='Tea' />
          <Divider />
          <List.Item title='Juice' />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}
