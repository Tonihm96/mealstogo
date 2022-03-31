import React, { useContext } from 'react'
import { Button } from 'react-native'
import { SafeArea } from '../../../components/utility/safe-area.component'

import { AuthenticationContext } from '../../../services/authentication/authentication.context'

export const Settings = () => {
  const { isLoading, error, onLogout } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <Button title='logout' onPress={() => onLogout()} />
    </SafeArea>
  )
}
