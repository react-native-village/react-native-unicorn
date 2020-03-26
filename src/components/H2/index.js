// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1
  }
})

type H2T = {
  title: string,
  textStyle: TextStyleProp
}

const H2 = memo<H2T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h2: { fontFamily, fontSize, color, uri },
    colors: { secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily,
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/TheDolbak-Brush.ttf'
    }
  ]
  const size = Platform.OS === 'ios' ? 25 : 30
  const flattenedStyle = StyleSheet.flatten([
    h,
    textStyle,
    { fontFamily, fontSize: fontSize || size, color, textShadowColor: secondary }
  ])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle}>{title}</Text>
    </CustomFontsProvider>
  )
})

export { H2 }
