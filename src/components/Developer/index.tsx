import React, { memo } from 'react'
import {StyleProp, ViewStyle} from 'react-native'
import { CardBorder } from '../CardBorder'
import { ButtonDeveloperSub } from '../ButtonDeveloperSub'

interface DeveloperT {
  title: string,
  uri: string,
  rate: number,
  viewStyle: StyleProp<ViewStyle>
}

const Developer = memo<DeveloperT>(({ title, uri, viewStyle, rate }) => {
  return (
    <CardBorder viewStyle={viewStyle}>
      <ButtonDeveloperSub title={title} uri={uri} rate={rate} />
    </CardBorder>
  )
})

export { Developer }
