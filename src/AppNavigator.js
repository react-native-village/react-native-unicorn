import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens' // eslint-disable-line
import UIKit from './UIKit'

enableScreens()

export const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Stack" component={UIKit} />
      </Stack.Navigator>
    </SafeAreaProvider>
  )
}

export default AppNavigator
