// @flow
import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native'
import faker from 'faker'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { H0, H1, H2, H3, Space, Avatar } from './components'
import {
  userData,
  cardCareer,
  cardContacts,
  cardEducation,
  cardIssueResponce,
  cardVacancies,
  cardIssue,
  cardResume,
  cardInfo
} from './data'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const UIKit = () => {
  const { scrollView } = styles
  const {
    colors: { backgroundColor, primary, secondary }
  } = useTheme()
  const [bool, setBool] = useState(false)
  const _onPress = () => console.log('click') // eslint-disable-line
  const { image, name, lorem, random } = faker
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor }]}>
        <View style={{ alignItems: 'center' }}>
          <H0 title="FONTS" />
          <Space height={10} />
          <H1 title="H1" textStyle={{ textAlign: 'center' }} />
          <Space height={1} />
        </View>
      </ScrollView>
    </>
  )
}

export default UIKit
