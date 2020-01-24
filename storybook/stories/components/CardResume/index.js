// @flow
import React, { memo, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, CardBorder, CardInfo, H2, Space, Star, Rate } from '..'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  starStyle: {
    bottom: 2
  }
})

type CardResumeT = {
  obj: {
    title: string,
    avatar: string,
    rate: number,
    cost: number
  },
  obj2: {
    position: string,
    language: string,
    stack: string,
    experience: string
  }
}

const CardResume = memo<CardResumeT>(({ obj, obj2 }) => {
  const { title, rate, avatar } = obj
  const { container, starStyle } = styles
  const [star, setStar] = useState(false)
  return (
    <CardBorder>
      <View style={container}>
        <H2 title={title} />
        <View style={starStyle}>
          <Star bool={star} onPress={() => setStar(!star)} />
        </View>
      </View>
      <Space height={20} />
      <Avatar uri={avatar} size="large" />
      <Space height={20} />
      <Rate title={rate} />
      <Space height={20} />
      <CardInfo obj={obj2} bool={false} />
    </CardBorder>
  )
})

export { CardResume }
