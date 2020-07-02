import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { ButtonLink } from '../ButtonLink'
import { H7 } from '../H7'
import { Body } from '../Body'
import { Space } from '../Space'

interface CardContactsT  {
  obj?: {
    location: string,
    web: string,
    phone: string
  }
}

const CardContacts = memo<CardContactsT>(({ obj }) => {
  const { location, web, phone } = obj
  return (
    <>
      <CardBorder>
        <H7 title="Location" />
        <Space height={5} />
        <Body title={location} />
        <Space height={10} />
        <H7 title="Web" />
        <Space height={5} />
        <ButtonLink title={web} />
        <Space height={10} />
        <H7 title="Phone" />
        <Space height={2} />
        <Body title={phone} />
      </CardBorder>
    </>
  )
})

export { CardContacts }
