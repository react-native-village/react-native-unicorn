import React, { memo } from 'react'
import { Platform,StyleProp, TextStyle, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

interface H0T {
  title: string,
  textStyle: StyleProp<TextStyle>
}

const H0 = memo<H0T>(({ title, textStyle }) => {
  const {
    dark,
    h0: { fontSize, fontFamily },
    colors: { primary, secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 35 : 45
  return (
    <Text style={[textStyle, { color: dark ? primary : secondary, fontFamily, fontSize: fontSize || size }]}>
      {title}
    </Text>
  )
})

export { H0 }
