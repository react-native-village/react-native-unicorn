// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

const styles = StyleSheet.create({
  h: {
    textAlign: 'left',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 19 : 17
      },
      {
        fontSize: Platform.OS === 'ios' ? 12 : 17
      }
    )
  }
})

type BodyT = {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: TextStyleProp
}

const Body = memo<BodyT>(({ title, textStyle, numberOfLines, ellipsizeMode }) => {
  const { h } = styles
  const {
    body: { fontFamily, fontSize, color, uri },
    colors: { secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily,
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/KLMN_Flash_Pix.ttf'
    }
  ]

  const size = Platform.OS === 'ios' ? 12 : 12
  const flattenedStyle = StyleSheet.flatten([
    h,
    textStyle,
    { fontFamily, fontSize: fontSize || size, color, textShadowColor: secondary }
  ])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>
        {title}
      </Text>
    </CustomFontsProvider>
  )
})

export { Body }
