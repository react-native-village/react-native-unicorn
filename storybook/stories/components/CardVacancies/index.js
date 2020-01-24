// @flow
import React, { memo, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { CardBorder, H2, H4, Space, Star, Cost } from '..'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  starStyle: {
    left: 10
  }
})

type CardVacanciesT = {
  obj: {
    title: string,
    description: string,
    company: string,
    cost: number
  }
}

const CardVacancies = memo<CardVacanciesT>(({ obj }) => {
  const { title, description, company, cost } = obj
  const { container, row, starStyle } = styles
  const [star, setStar] = useState(false)
  return (
    <CardBorder>
      <View style={container}>
        <H2 title={title} />
        <Star bool={star} onPress={() => setStar(!star)} viewStyle={starStyle} />
      </View>
      <Space height={10} />
      <H4 title={description} />
      <Space height={10} />
      <View style={row}>
        <H4 title={company} />
        <Cost title={cost} />
      </View>
    </CardBorder>
  )
})

export { CardVacancies }
