import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle,StyleSheet, Text } from 'react-native'

import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const styles = StyleSheet.create({
  h: {
    width: W - 90,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

interface H6T  {
  title: string,
  textStyle: StyleProp<TextStyle>
}

const H6 = memo<H6T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h6: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 13 : 13
  return (
    <Text style={[h, textStyle, { fontFamily, color, fontSize: fontSize || size, textShadowColor: secondary }]}>
      {title}
    </Text>
  )
})

export { H6 }
