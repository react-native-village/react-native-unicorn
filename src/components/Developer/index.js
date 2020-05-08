// @flow
import React, { memo } from 'react'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { CardBorder } from '../CardBorder'
import { ButtonDeveloperSub } from '../ButtonDeveloperSub'

type DeveloperT = {
  title: string,
  uri: string,
  rate: number,
  viewStyle: ViewStyleProp
}

const Developer = memo<DeveloperT>(({ title, uri, viewStyle, rate }) => {
  return (
    <CardBorder viewStyle={viewStyle}>
      <ButtonDeveloperSub title={title} uri={uri} rate={rate} />
    </CardBorder>
  )
})

export { Developer }
