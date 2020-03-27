// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type H1T = {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: TextStyleProp
}

const H1 = memo<H1T>(({ title, textStyle, numberOfLines, ellipsizeMode = 'tail' }) => {
  const { h } = styles
  const {
    h1: { fontFamily, fontSize, color, uri },
    colors: { secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily,
      fontWeight: 'Normal',
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/KLMN_Flash_Pix.ttf'
    }
  ]
  const size = Platform.OS === 'ios' ? 15 : 20
  const flattenedStyle = StyleSheet.flatten([
    h,
    textStyle,
    { fontFamily, fontSize: fontSize || size, color, textShadowColor: secondary, fontWeight: 'Normal' }
  ])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>
        {title}
      </Text>
    </CustomFontsProvider>
  )
})

export { H1 }
