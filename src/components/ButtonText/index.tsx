import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { H8 } from '../H8'

interface ButtonTextT {
  title: string;
  onPress: ()=>void;
}

const ButtonText = memo<ButtonTextT>(({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <H8 title={title} />
    </TouchableOpacity>
  )
})

export { ButtonText }
