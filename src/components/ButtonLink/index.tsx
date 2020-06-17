import React, { memo } from 'react'
import { StyleSheet, StyleProp, TextStyle, ViewStyle, Platform, TouchableOpacity, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

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

interface ButtonLinkT {
  title: string;
  textStyle: StyleProp<TextStyle>;
  viewStyle: StyleProp<ViewStyle>;
  onPress: ()=> void;
}

const ButtonLink = memo<ButtonLinkT>(({ title, textStyle, viewStyle, onPress }) => {
  const { container, h } = styles
  const {
    dark,
    body: { fontFamily, fontSize },
    colors: { primary, secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 13 : 13
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Text
        style={[
          h,
          textStyle,
          { fontFamily, fontSize: fontSize || size, color: dark ? primary : secondary, textShadowColor: secondary }
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
})

export { ButtonLink }
