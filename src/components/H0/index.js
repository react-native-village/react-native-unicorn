// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

type H0T = {
  title: string,
  textStyle: TextStyleProp
}

const H0 = memo<H0T>(({ title, textStyle }) => {
  const {
    dark,
    h0: { fontSize, fontFamily, uri },
    colors: { primary, secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 40 : 40
  const flattenedStyle = StyleSheet.flatten([
    textStyle,
    { color: dark ? primary : secondary, fontSize: fontSize || size, fontFamily }
  ])
  const fontFaces = [
    {
      fontFamily,
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/etna-free-font.ttf'
    }
  ]

  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle}>{title}</Text>
    </CustomFontsProvider>
  )
})

export { H0 }
