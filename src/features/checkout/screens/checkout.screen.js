import React, { useState, useEffect, useContext } from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

import { CartContext } from '../../../services/cart/cart.context'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component'
import { payRequest } from '../../../services/checkout/checkout.service'
import { CreditCardInput } from './components/credit-card.component'
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessingContainer,
  PaymentProcessing
} from './components/checkout.styles'

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, clearCart, sum } = useContext(CartContext)
  const [name, setName] = useState('')
  const [card, setCard] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onPay = () => {
    setIsLoading(true)
    if (!card || !card.id) {
      setIsLoading(false)
      navigation.navigate('CheckoutError', {
        err: 'Please fill in a valid credit card.'
      })
      return
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false)
        navigation.navigate('CheckoutSuccess')
      })
      .catch((err) => {
        setIsLoading(false)
        navigation.navigate('CheckoutError', { err })
      })
  }

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
      {isLoading && (
        <PaymentProcessingContainer>
          <PaymentProcessing />
        </PaymentProcessingContainer>
      )}
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position='left' size='medium'>
          <Spacer position='top' size='medium'>
            <List.Section>
              {cart.map(({ item, price }, idx) => {
                return (
                  <List.Item
                    key={`item-${idx}`}
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
        <NameInput
          label='Name'
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Spacer position='top' size='large' />
        {name.length > 0 && (
          <CreditCardInput
            name={name}
            onSuccess={setCard}
            onError={() =>
              navigation.navigate('CheckoutError', {
                err: 'Something went wrong processing your credit card.'
              })
            }
          />
        )}
        <Spacer position='top' size='xxl' />
        <PayButton disabled={isLoading} icon='cash-usd' onPress={onPay}>
          Pay
        </PayButton>
        <Spacer position='top' size='large' />
        <ClearButton disabled={isLoading} icon='cart-off' onPress={clearCart}>
          Clear Cart
        </ClearButton>
        <Spacer position='top' size='large' />
      </ScrollView>
    </SafeArea>
  )
}
