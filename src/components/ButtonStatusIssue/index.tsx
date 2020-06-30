import React, { memo } from 'react'
import { StyleSheet, View,StyleProp, TextStyle,ViewStyle,  Platform, TouchableOpacity, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { WHITE, BLUE } from '../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 17,
    borderColor: WHITE,
    width: '40%',
    height: 50,
    marginTop: 2,
    marginLeft: 5
  },
  h: {
    alignSelf: 'center',
    padding: 15,
    color: BLUE
  }
})

interface ButtonStatusIssueT {
  title: string;
  color?: string;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
  onPress?: ()=>void;
}

const ButtonStatusIssue = memo<ButtonStatusIssueT>(({ title, color, textStyle, viewStyle, onPress }) => {
  const { h, container } = styles
  const {
    h8: { fontFamily, fontSize },
    colors: { secondary }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 16 : 16
  return (
    <View style={[container, viewStyle, { borderColor: color }]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[h, textStyle, { fontFamily, fontSize: fontSize || size, color, textShadowColor: secondary }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
})

export { ButtonStatusIssue }
