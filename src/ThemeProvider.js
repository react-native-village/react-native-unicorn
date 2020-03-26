// @flow
import React, { memo } from 'react'
import type { Node } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'

//window.LOG_LEVEL = 'DEBUG'

type ThemeProviderT = {
  children?: Node,
  theme: {}
}

const ThemeProvider = memo<ThemeProviderT>(({ children, theme }) => {
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </AppearanceProvider>
    </>
  )
})

export default ThemeProvider
