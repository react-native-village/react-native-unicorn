// @flow
import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import faker from 'faker'
import { Input, Space, Button } from './components'
//import { cardVacancies } from './data'

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
          <Formik
            initialValues={{ position: 'React Native Developer', rate: 5000, description: faker.lorem.paragraph() }}
            onSubmit={values => _onPress(values)}
            validationSchema={Yup.object().shape({
              position: Yup.string()
                .min(3)
                .required(),
              rate: Yup.number()
                .min(3)
                .required(),
              description: Yup.string()
                .min(3)
                .required()
            })}
          >
            {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
              <>
                <Input
                  name="position"
                  value={values.position}
                  onChangeText={handleChange('position')}
                  onBlur={() => setFieldTouched('position')}
                  placeholder="Position"
                  touched={touched}
                  errors={errors}
                />
                <Input
                  name="rate"
                  keyboardType="numeric"
                  value={`${values.rate}`}
                  onChangeText={handleChange('rate')}
                  onBlur={() => setFieldTouched('rate')}
                  placeholder="Rate"
                  touched={touched}
                  errors={errors}
                />
                <Input
                  name="description"
                  value={values.description}
                  onChangeText={handleChange('description')}
                  onBlur={() => setFieldTouched('description')}
                  placeholder="Description"
                  touched={touched}
                  errors={errors}
                  multiline
                  numberOfLines={4}
                />
                <Space height={40} />
                <Button title="Sign In" disabled={!isValid} onPress={handleSubmit} formik />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </>
  )
}

export default UIKit
