import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Title, Paragraph, Card } from 'react-native-paper'
import styled from 'styled-components/native'

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Restaurant',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
    ],
    address = 'Example Address',
    isOpenNow = true,
    //openingHours = '',
    rating = 3,
    isClosedTemporarily
  } = restaurant

  return (
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  )
}
