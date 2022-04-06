import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { List, Avatar } from 'react-native-paper'

import { SafeArea } from '../../../components/utility/safe-area.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'

import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.spacing[3]};
`

const AvatarContainer = styled.View`
  padding-top: ${(props) => props.theme.spacing[3]};
  align-items: center;
`

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
          <Avatar.Icon
            size={180}
            icon={() => <AntDesign name='user' size={120} color='white' />}
            backgroundColor='#2182BD'
          />
        </TouchableOpacity>
        <Spacer position='top' size='large' />
        <Text variant='label'>{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={(props) => (
            <List.Icon {...props} color='black' icon='heart-outline' />
          )}
          onPress={() => navigation.navigate('FavouritesScreen')}
        />
        <SettingsItem
          title='Logout'
          left={(props) => <List.Icon {...props} color='black' icon='logout' />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  )
}
