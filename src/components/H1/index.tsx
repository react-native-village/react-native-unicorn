import React, { memo } from 'react'
import { StyleSheet, StyleProp, TextStyle, Text, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

interface H1T {
  title: string,
  numberOfLines: number,
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip',
  textStyle: StyleProp<TextStyle>
}

const H1 = memo<H1T>(({ title, textStyle, numberOfLines, ellipsizeMode = 'tail' }) => {
  const { h } = styles
  const {
    h1: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 15 : 20
  return (
    <Text
      style={[h, textStyle, { fontFamily, fontSize: fontSize || size, color, textShadowColor: secondary }]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {title}
    </Text>
  )
})

export { H1 }
