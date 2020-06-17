import React, { memo } from 'react'
import { Platform, StyleSheet,StyleProp, TextStyle, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  h: {
    fontWeight: 'bold'
  }
})

interface H5T  {
  title: string,
  textStyle: StyleProp<TextStyle>
}

const H5 = memo<H5T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h5: { fontFamily, fontSize, color }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 23 : 23
  return <Text style={[h, textStyle, { fontFamily, fontSize: fontSize || size, color }]}>{title}</Text>
})

export { H5 }
