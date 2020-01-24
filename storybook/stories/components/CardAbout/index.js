// @flow
import React, { memo } from 'react'
import { CardBorder, H4 } from '..'

type CardAboutT = {
  title: string
}

const CardAbout = memo<CardAboutT>(({ title }) => {
  return (
    <CardBorder>
      <H4 title={title} />
    </CardBorder>
  )
})

export { CardAbout }
