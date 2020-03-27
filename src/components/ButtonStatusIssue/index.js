// @flow
import React, { memo } from 'react'
import { StyleSheet, View, Platform, TouchableOpacity } from 'react-native'
import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'
import { WHITE, BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 17,
    borderColor: WHITE,
    width: '40%',
    height: 50,
    marginTop: 2,
    marginLeft: 5
  },
  h: {
    alignSelf: 'center',
    padding: 15,
    color: BLUE
  }
})

type ButtonStatusIssueT = {
  title: string,
  color: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp,
  onPress: Function
}

const ButtonStatusIssue = memo<ButtonStatusIssueT>(({ title, color, textStyle, viewStyle, onPress }) => {
  const { h, container } = styles
  const {
    h8: { fontFamily, fontSize, uri },
    colors: { secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily,
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/3270Narrow.ttf'
    }
  ]
  const size = Platform.OS === 'ios' ? 16 : 16
  const flattenedStyle = StyleSheet.flatten([
    h,
    textStyle,
    { fontFamily, fontSize: fontSize || size, color, textShadowColor: secondary }
  ])
  return (
    <View style={[container, viewStyle, { borderColor: color }]}>
      <TouchableOpacity onPress={onPress}>
        <CustomFontsProvider fontFaces={fontFaces}>
          <Text style={flattenedStyle}>{title}</Text>
        </CustomFontsProvider>
      </TouchableOpacity>
    </View>
  )
})

export { ButtonStatusIssue }
