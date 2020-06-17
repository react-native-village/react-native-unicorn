import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

interface H8T  {
  title: string,
  textStyle: StyleProp<TextStyle>
}

const H8 = memo<H8T>(({ title, textStyle }) => {
  const {
    dark,
    h8: { fontFamily, fontSize },
    colors: { primary, secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 16 : 16
  return (
    <Text style={[textStyle, { fontFamily, fontSize: fontSize || size, color: dark ? primary : secondary }]}>
      {title}
    </Text>
  )
})

export { H8 }
