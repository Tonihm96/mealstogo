import React from 'react'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { Text } from '../../../components/typography/text.component'
import { colors } from '../../../infrastructure/theme/colors'

import { CartIconContainer, CartIcon } from './components/checkout.styles'

export const CheckoutErrorScreen = ({ navigation, route }) => {
  const { err = '' } = route.params
  setTimeout(() => {
    navigation.navigate('Checkout')
  }, 2000)
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon='close' bg={colors.ui.error} />
        <Text>{err}</Text>
      </CartIconContainer>
    </SafeArea>
  )
}
