import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button } from './components'
import CenterView from './CenterView'
import Welcome from './Welcome'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => <Button title="Hello world" onPress={action('clicked-emoji')} />)
  .add('with some emoji', () => <Button title="Hello" onPress={action('clicked-emoji')} />)
