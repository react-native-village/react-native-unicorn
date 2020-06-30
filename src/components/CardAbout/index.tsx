import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Body } from '../Body'

interface CardT  {
    title: string;
}

const CardAbout = memo<CardT>(({ title }) => {
  return (
    <>
      <CardBorder>
        <Body title={title} />
      </CardBorder>
    </>
  )
})

export { CardAbout }
