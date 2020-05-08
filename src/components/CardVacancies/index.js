// @flow
import React, { memo, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { H7  } from '../H7'
import {  H1  } from '../H1'
import { Body } from '../Body'
import { CardBorder } from '../CardBorder'
import { Star } from '../Star'
import { Space } from '../Space'
import { W } from '../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

type CardVacanciesT = {
  obj: {
    position: string,
    description: string,
    owner: string,
    rate: number
  },
  onPress: Function,
  detail: boolean
}

const CardVacancies = memo<CardVacanciesT>(({ obj, onPress, detail }) => {
  const { position, description, owner, rate } = obj
  const { container } = styles
  const [star, setStar] = useState(false)
  return (
    <>
      <CardBorder>
        <View style={container}>
          <H1 title={position} textStyle={{ width: W - 110 }} numberOfLines={1} />
          {false && <Star bool={star} onPress={() => setStar(!star)} />}
        </View>
        <Space height={20} />
        <TouchableOpacity onPress={onPress}>
          {detail ? <Body title={description} /> : <Body numberOfLines={4} title={description} />}
        </TouchableOpacity>
        <Space height={20} />
        <View style={container}>
          <H7 title={owner} textStyle={{ width: W - 140 }} numberOfLines={1} />
          <H7 title={`$ ${rate}`} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardVacancies }
