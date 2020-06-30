import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

interface H7T  {
  title: string,
  numberOfLines?: number,
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',
  textStyle?: StyleProp<TextStyle>
}

const H7 = memo<H7T>(({ title, textStyle, numberOfLines, ellipsizeMode }) => {
  const {
    h7: { fontFamily, fontSize, color },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 12 : 12
  return (
    <Text
      style={[textStyle, { fontFamily, color, fontSize: fontSize || size, textShadowColor: secondary }]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {title}
    </Text>
  )
})

export { H7 }
