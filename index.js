/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native'
import App from './storybook'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`'
])

AppRegistry.registerComponent(appName, () => App)
