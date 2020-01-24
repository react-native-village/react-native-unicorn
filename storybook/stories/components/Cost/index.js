// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { GREY } from '../constants'

const styles = StyleSheet.create({
  h4: {
    fontFamily: '3270Narrow',
    fontSize: 18,
    color: GREY
  }
})

type CostT = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const Cost = memo<CostT>(({ title, viewStyle, textStyle }) => {
  const { h4 } = styles
  return (
    <View style={viewStyle}>
      <Text style={[h4, textStyle]}>{`$ ${title}`}</Text>
    </View>
  )
})

export { Cost }
