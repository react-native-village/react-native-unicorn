import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
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
