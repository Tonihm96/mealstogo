import React, { useState, useContext, useEffect } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { LocationContext } from '../../../services/location/location.context'
//import { theme } from '../../../infrastructure/theme'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
  position: absolute;
  z-index: 999;
  top: 34px;
  width: 100%;
`
export const Search = () => {
  const { keyword, search } = useContext(LocationContext)
  const [searchKeyword, setSearchKeyword] = useState(keyword)

  useEffect(() => {
    setSearchKeyword(keyword)
  }, [keyword])

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        icon='map-search-outline'
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
