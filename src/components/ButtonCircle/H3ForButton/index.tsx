import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle,  StyleSheet, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

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

interface H3ForButtonT {
  title: string;
  textStyle?: StyleProp<TextStyle>;
}

const H3ForButton = memo<H3ForButtonT>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h3: { fontFamily, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 21 : 21
  return <Text style={[h, textStyle, { fontFamily, fontSize: size, color, textShadowColor: secondary }]}>{title}</Text>
})

export default H3ForButton
