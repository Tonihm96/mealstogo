import React from 'react'
import { View, Image } from 'react-native'
import { Paragraph, Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg'

import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import star from '../../../../assets/star'
import open from '../../../../assets/open'

const Section = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const InfoIcons = styled.View`
  align-items: center;
  flex-direction: row;
`

const RatingView = styled.View`
  flex-direction: row;
`

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'A Very Very Long Restaurant Title For Testing Purposes',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
    ],
    address = 'Example Address',
    isOpenNow = true,
    //openingHours = '',
    rating = 3.6,
    isClosedTemporarily = true
  } = restaurant

  const ratingArray = Array.from(
    new Array(Math.floor(rating))
  )

  return (
    <Card elevation={15}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Spacer position='top' size='large' />
        <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          variant='label'
        >
          {name}
        </Text>
        <Spacer position='bottom' size='large' />
        <Section>
          <RatingView>
            {ratingArray.map((_, idx) => (
              <SvgXml
                key={idx}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </RatingView>
          <InfoIcons>
            {isClosedTemporarily && (
              <Text variant='error'>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position='left' size='large'>
              {isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position='left' size='large'>
              <Image
                style={{ width: 15, height: 15 }}
                source={{ uri: icon }}
              />
            </Spacer>
          </InfoIcons>
        </Section>
        <Text variant='hint'>{address}</Text>
      </Card.Content>
    </Card>
  )
}
