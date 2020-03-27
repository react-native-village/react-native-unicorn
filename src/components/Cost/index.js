// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'
import { GREY } from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h: {
    fontFamily: '3270Narrow',
    color: GREY
  }
})

type CostT = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const Cost = memo<CostT>(({ title, viewStyle, textStyle }) => {
  const { container, h } = styles
  const {
    h8: { fontFamily, fontSize, uri }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily,
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/3270Narrow.ttf'
    }
  ]
  const size = Platform.OS === 'ios' ? 18 : 18
  const flattenedStyle = StyleSheet.flatten([h, textStyle, { fontFamily, fontSize: fontSize || size }])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <View style={[container, viewStyle]}>
        <Text style={flattenedStyle}>{`$ ${title}`}</Text>
      </View>
    </CustomFontsProvider>
  )
})

export { Cost }
