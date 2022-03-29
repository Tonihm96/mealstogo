import React, { useState, useContext, useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing[3]};
  position: absolute;
  z-index: 999;
  ${Platform.OS === 'android'
    ? StatusBar.currentHeight && `top: ${StatusBar.currentHeight}px;`
    : null};
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
