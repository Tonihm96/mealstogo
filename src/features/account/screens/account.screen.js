import React from 'react'
import LottieView from 'lottie-react-native'

import {
  AnimationWrapper,
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
    <AnimationWrapper>
      <LottieView
        key='animation'
        autoPlay
        loop
        resizeMode='cover'
        source={require('../../../../assets/watermelon.json')}
      />
    </AnimationWrapper>
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
