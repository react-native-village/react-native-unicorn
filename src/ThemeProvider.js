// @flow
import React, { memo } from 'react'
import type { Node } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'

//window.LOG_LEVEL = 'DEBUG'

type ThemeProviderT = {
  children?: Node,
  scheme: boolean,
  DarkTheme: {},
  LightTheme: {}
}

const ThemeProvider = memo<ThemeProviderT>(({ scheme, children, DarkTheme, LightTheme }) => {
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={scheme ? DarkTheme : LightTheme}>{children}</NavigationContainer>
      </AppearanceProvider>
    </>
  )
})

export default ThemeProvider
