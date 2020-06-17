import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1
  }
})

interface H2T  {
  title: string,
  textStyle: StyleProp<TextStyle>
}

const H2 = memo<H2T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h2: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 25 : 30
  return (
    <Text style={[h, textStyle, { fontFamily, fontSize: fontSize || size, color, textShadowColor: secondary }]}>
      {title}
    </Text>
  )
})

export { H2 }
