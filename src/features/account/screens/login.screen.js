import React, { useContext, useState } from 'react'

import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import {
  Loading,
  AccountBackground,
  AccountCover,
  Title,
  AccountContainer,
  AuthButton,
  AuthInput
} from '../components/account.styles'

import { Spacer } from '../../../components/spacer/spacer.component'

export const LoginScreen = () => {
  const { isLoading, error, onLogin } = useContext(AuthenticationContext)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      {isLoading ? (
        <Loading size='large' />
      ) : (
        <AccountContainer>
          <AuthInput
            error={error}
            label='E-mail'
            value={email}
            autoCapitalize='none'
            keyboardType='emailAddress'
            textContentType='email-address'
            left={<AuthInput.Icon name='email-outline' />}
            onChangeText={(input) => setEmail(input)}
          />
          <Spacer size='large' />
          <AuthInput
            error={error}
            label='Password'
            value={password}
            autoCapitalize='none'
            secureTextEntry
            textContentType='password'
            left={<AuthInput.Icon name='lock-outline' />}
            onChangeText={(input) => setPassword(input)}
          />
          <Spacer size='large' />
          {error && (
            <>
              <Text variant='error'>{error}</Text>
              <Spacer size='large' />
            </>
          )}
          <AuthButton icon='login' onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        </AccountContainer>
      )}
    </AccountBackground>
  )
}
