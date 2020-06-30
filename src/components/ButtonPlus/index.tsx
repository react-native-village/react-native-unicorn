import React, { memo } from 'react'
import { StyleSheet,StyleProp, TextStyle, ViewStyle, TouchableOpacity, Image } from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { useTheme } from '@react-navigation/native'
import { W } from '../constants'

const size = 70

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    ...ifIphoneX(
      {
        bottom: 55
      },
      {
        bottom: 15
      }
    ),
    left: W / 2 - size / 2,
    width: size,
    height: size
  },
  img: {
    ...ifIphoneX(
      {
        width: size + 15,
        height: size + 15
      },
      {
        width: size,
        height: size
      }
    ),
    alignSelf: 'center'
  }
})

interface ButtonPlusT {
  textStyle?: StyleProp<TextStyle>;
  viewStyle?: StyleProp<ViewStyle>;
}


const ButtonPlus = memo<ButtonPlusT>(() => {
  const { container, img } = styles
  const { dark } = useTheme()

  const icon = dark ? require('./images/PlusB.png') : require('./images/PlusW.png')

  const _onPress = () => {}

  return (
    <>
      <TouchableOpacity style={container} onPress={_onPress}>
        <Image source={icon} style={[img]} />
      </TouchableOpacity>
    </>
  )
})

export { ButtonPlus }
