import React, { useState, useContext } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { LocationContext } from '../../../services/location/location.context'
//import { theme } from '../../../infrastructure/theme'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
`

export const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword)
        }}
        onChangeText={(text) => {
          if (!text.length) {
          }
          setSearchKeyword(text)
        }}
      />
    </SearchContainer>
  )
}
