// @flow
import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { H0, H1, H2, H3, H4, H5, H6, H7, H8, Body, Cost, Space } from './components'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const UIKit = () => {
  const { scrollView } = styles
  const {
    colors: { backgroundColor }
  } = useTheme()
  const _onPress = () => console.log('click') // eslint-disable-line
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor }]}>
        <View style={{ alignItems: 'center' }}>
          <H0 title="FONTS" />
          <Space height={10} />
          <H0 title="H0" />
          <Space height={1} />
          <H1 title="H1" textStyle={{ textAlign: 'center' }} />
          <Space height={1} />
          <H2 title="H2" />
          <Space height={5} />
          <H3 title="H3" />
          <Space height={5} />
          <H4 title="H4" />
          <Space height={1} />
          <H5 title="H5" />
          <Space height={5} />
          <H6 title="H6" />
          <Space height={5} />
          <H7 title="H7" />
          <Space height={5} />
          <H8 title="H8" />
          <Space height={5} />
          <Body title="body" />
          <Space height={10} />
          <Cost title="500" />
          <Space height={90} />
        </View>
      </ScrollView>
    </>
  )
}

export default UIKit
