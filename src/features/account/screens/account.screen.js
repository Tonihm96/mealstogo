import React from 'react'

import {
  AccountBackground,
  AccountCover,
  Title,
  AccountContainer,
  AuthButton
} from '../components/account.styles'

import { Spacer } from '../../../components/spacer/spacer.component'

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <Title>Meals To Go</Title>
    <AccountContainer>
      <AuthButton icon='login' onPress={() => navigation.navigate('Login')}>
        Login
      </AuthButton>
      <Spacer size='large' />
      <AuthButton
        icon='email-outline'
        onPress={() => navigation.navigate('Register')}
      >
        Register
      </AuthButton>
    </AccountContainer>
  </AccountBackground>
)
