import React, { useState, useEffect, useContext } from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

import { CartContext } from '../../../services/cart/cart.context'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component'
import { CreditCardInput } from './components/credit-card.component'
import { CartIconContainer, CartIcon } from './components/checkout.styles'

export const CheckoutScreen = () => {
  const [sum, setSum] = useState(0)
  const { cart, restaurant } = useContext(CartContext)

  useEffect(() => {
    if (!cart.length) {
      setSum(0)
    } else {
      const newSum = cart.reduce((acc, { price }) => {
        return (acc += price)
      }, 0)
      setSum(newSum)
    }
  }, [cart])

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon='cart-off' />
          <Text>Your cart is empty</Text>
        </CartIconContainer>
      </SafeArea>
    )
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position='left' size='medium'>
          <Spacer position='top' size='medium'>
            <List.Section>
              {cart.map(({ item, price }) => {
                return (
                  <List.Item
                    title={`${
                      item.charAt(0).toUpperCase() + item.slice(1)
                    } - $ ${price / 100}`}
                  />
                )
              })}
            </List.Section>
            <Text>Total: $ {sum / 100}</Text>
          </Spacer>
        </Spacer>
        <CreditCardInput />
      </ScrollView>
    </SafeArea>
  )
}
