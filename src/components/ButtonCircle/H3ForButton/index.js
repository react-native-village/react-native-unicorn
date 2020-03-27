// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h: {
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type H3ForButtonT = {
  title: string,
  textStyle: TextStyleProp
}

const H3ForButton = memo<H3ForButtonT>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h3: { fontFamily, color, uri },
    colors: { secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily: fontFamily || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/KLMN_Flash_Pix.ttf',
      uri
    }
  ]
  const size = Platform.OS === 'ios' ? 21 : 21
  const flattenedStyle = StyleSheet.flatten([
    h,
    textStyle,
    { fontFamily, fontSize: size, color, textShadowColor: secondary }
  ])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle}>{title}</Text>
    </CustomFontsProvider>
  )
})

export default H3ForButton
