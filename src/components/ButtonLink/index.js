// @flow
import React, { memo } from 'react'
import { StyleSheet, Platform, TouchableOpacity } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h: {
    fontSize: 15,
    textDecorationLine: 'underline'
  }
})

type ButtonLinkT = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp,
  onPress: Function
}

const ButtonLink = memo<ButtonLinkT>(({ title, textStyle, viewStyle, onPress }) => {
  const { container, h } = styles
  const {
    dark,
    body: { fontFamily, fontSize, uri },
    colors: { primary, secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily: fontFamily || 'Avenir Next',
      uri
    }
  ]
  const size = Platform.OS === 'ios' ? 13 : 13
  const flattenedStyle = StyleSheet.flatten([
    h,
    textStyle,
    { fontFamily, fontSize: fontSize || size, color: dark ? primary : secondary, textShadowColor: secondary }
  ])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
        <Text style={flattenedStyle}>{title}</Text>
      </TouchableOpacity>
    </CustomFontsProvider>
  )
})

export { ButtonLink }
