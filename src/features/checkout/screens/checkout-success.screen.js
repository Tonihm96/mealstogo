import React, { useContext } from 'react'

import { CartContext } from '../../../services/cart/cart.context'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { Text } from '../../../components/typography/text.component'

import { CartIconContainer, CartIcon } from './components/checkout.styles'

export const CheckoutSuccessScreen = ({ navigation }) => {
  const { clearCart } = useContext(CartContext)
  setTimeout(() => {
    navigation.navigate('Checkout')
    clearCart()
  }, 2000)
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon='check-bold' />
        <Text variant='label'>Success!</Text>
      </CartIconContainer>
    </SafeArea>
  )
}
