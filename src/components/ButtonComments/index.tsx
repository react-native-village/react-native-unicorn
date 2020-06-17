import React, { memo } from 'react'
import { Platform, StyleProp, ViewStyle, StyleSheet, TouchableOpacity, View } from 'react-native'
import Emoji from 'react-native-emoji'
import { H7 } from '../H7'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  sub: {
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    marginBottom: 4
  },
  h4: {
    paddingLeft: 6,
    top: Platform.OS === 'ios' ? 0 : 4
  }
})

interface ButtonCommentsT {
  title: string,
  onPress: Function,
  viewStyle: StyleProp<ViewStyle>
}

const ButtonComments = memo<ButtonCommentsT>(({ title, onPress, viewStyle }) => {
  const { container, sub, emoji, h4 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <View style={[sub, viewStyle]}>
        <Emoji name=":thought_balloon:" style={emoji} />
        <H7 title={title} textStyle={h4} />
      </View>
    </TouchableOpacity>
  )
})

export { ButtonComments }
