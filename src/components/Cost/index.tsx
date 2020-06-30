import React, { memo } from 'react'
import { Platform, StyleSheet, StyleProp, TextStyle,ViewStyle,  View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { GREY } from '../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h: {
    fontFamily: '3270Narrow',
    color: GREY
  }
})

interface CostT  {
  title: string,
  textStyle?: StyleProp<TextStyle>,
  viewStyle?: StyleProp<ViewStyle>
}


const Cost = memo<CostT>(({ title, viewStyle, textStyle }) => {
  const { container, h } = styles
  const {
    h8: { fontFamily, fontSize }
  } = useTheme()
  const size = Platform.OS === 'ios' ? 18 : 18
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h, textStyle, { fontFamily, fontSize: fontSize || size }]}>{`$ ${title}`}</Text>
    </View>
  )
})

export { Cost }
