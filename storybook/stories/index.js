// @flow
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import {
  Avatar,
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  CardResume,
  CardCareer,
  CardCareer2,
  CardInfo,
  CardAbout,
  CardContacts,
  CardVacancies
} from './components'
import CenterView from './CenterView'
import Welcome from './Welcome'
import { cardinfo, cardabout, cardcontacts, cardvacancies, cardcareer, cardresume } from './data'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Avatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('large', () => (
    <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="large" />
  ))
  .add('medium', () => (
    <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="medium" />
  ))
  .add('small', () => (
    <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="small" />
  ))

storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('H1', () => <H1 title="H1" />)
  .add('H2', () => <H2 title="H2" />)
  .add('H3', () => <H3 title="H3" />)
  .add('H4', () => <H4 title="H4" />)
  .add('H5', () => <H5 title="H5" />)
  .add('H6', () => <H6 title="H6" />)
  .add('H7', () => <H7 title="H7" />)

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => <Button title="Hello world" onPress={action('clicked-emoji')} />)
  .add('with text', () => <Button title="Hello world" onPress={action('clicked-emoji')} />)
  .add('with some emoji', () => <Button title="Hello" onPress={action('clicked-emoji')} />)

storiesOf('Cards', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('CardResume', () => <CardResume obj={cardresume} obj2={cardinfo} />)
  .add('CardCareer', () => <CardCareer obj={cardcareer} />)
  .add('CardContacts', () => <CardContacts obj={cardcontacts} />)
  .add('CardVacancies', () => <CardVacancies obj={cardvacancies} />)
  .add('CardAbout', () => <CardAbout title={cardabout} />)
  .add('CardAbout2', () => <CardCareer2 obj={cardcareer} />)
  .add('CardInfo', () => <CardInfo obj={cardinfo} />)
