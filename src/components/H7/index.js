// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

type H7T = {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: TextStyleProp
}

const H7 = memo<H7T>(({ title, textStyle, numberOfLines, ellipsizeMode }) => {
  const {
    h7: { fontFamily, fontSize, color, uri },
    colors: { secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily: fontFamily || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/KLMN_Flash_Pix.ttf',
      uri
    }
  ]
  const size = Platform.OS === 'ios' ? 12 : 12
  const flattenedStyle = StyleSheet.flatten([
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

export { H7 }
