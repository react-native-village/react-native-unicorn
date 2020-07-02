import React, { memo } from 'react'
import { Platform, StyleSheet,StyleProp, TextStyle, ViewStyle, TouchableOpacity } from 'react-native'
import { H7 } from '../H7'
import { Rate } from '../Rate'
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Avatar } from '../Avatar'
import { W } from '../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  h: {
    width: W - 200,
    marginTop: Platform.OS === 'ios' ? 8 : 10,
    marginLeft: 15,
    marginRight: 5
  },
  rateStyle: {
    marginTop: Platform.OS === 'ios' ? 3 : 0
  }
})

interface ButtonDeveloperSubT {
  title: string;
  uri?: string;
  rate?: number;
  textStyle?: StyleProp<TextStyle>;
  viewStyle?:  StyleProp<ViewStyle>;
  onPress?: ()=>void;
}

const ButtonDeveloperSub = memo<ButtonDeveloperSubT>(({ title, viewStyle, uri, onPress, rate }) => {
  const { container, h, rateStyle } = styles
  return (
    <TouchableOpacity onPress={onPress} style={[container, viewStyle]}>
      <Avatar uri={uri} size="small" />
      <H7 title={title} textStyle={h} numberOfLines={1} ellipsizeMode="tail" />
      <Rate title={rate} viewStyle={rateStyle} />
    </TouchableOpacity>
  )
})

export { ButtonDeveloperSub }
