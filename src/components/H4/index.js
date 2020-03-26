// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

const styles = StyleSheet.create({
  h: {
    fontWeight: 'bold'
  }
})

type H4T = {
  title: string,
  textStyle: TextStyleProp
}

const H4 = memo<H4T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h4: { fontFamily, fontSize, color, uri }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily: fontFamily || 'Avenir Next',
      uri
    }
  ]
  const size = Platform.OS === 'ios' ? 23 : 23
  const flattenedStyle = StyleSheet.flatten([h, textStyle, { fontFamily, fontSize: fontSize || size, color }])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle}>{title}</Text>
    </CustomFontsProvider>
  )
})

export { H4 }
