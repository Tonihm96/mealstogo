import React, { useContext, useState } from 'react'

import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import {
  Loading,
  AccountBackground,
  AccountCover,
  Title,
  AccountContainer,
  ErrorContainer,
  AuthButton,
  AuthInput
} from '../components/account.styles'

import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'

export const LoginScreen = ({ navigation }) => {
  const { isLoading, error, onLogin } = useContext(AuthenticationContext)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          error={error}
          label='E-mail'
          value={email}
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
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
          <ErrorContainer>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        {isLoading ? (
          <Loading size='large' />
        ) : (
          <AuthButton icon='login' onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        )}
      </AccountContainer>
      <Spacer size='large' />
      <AuthButton icon='login' onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  )
}
