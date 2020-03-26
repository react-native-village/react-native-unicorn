// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

type H8T = {
  title: string,
  textStyle: TextStyleProp
}

const H8 = memo<H8T>(({ title, textStyle }) => {
  const {
    dark,
    h8: { fontFamily, fontSize, uri },
    colors: { primary, secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily,
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/3270Narrow.ttf'
    }
  ]
  const size = Platform.OS === 'ios' ? 16 : 16
  const flattenedStyle = StyleSheet.flatten([
    textStyle,
    { fontFamily, fontSize: fontSize || size, color: dark ? primary : secondary, textShadowColor: secondary }
  ])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle}>{title}</Text>
    </CustomFontsProvider>
  )
})

export { H8 }
