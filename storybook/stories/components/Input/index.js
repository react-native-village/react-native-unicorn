// @flow
import React, { memo, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import t from 'tcomb-form-native'
import { search, options } from '../Form'
import { W, BLUE, PINK } from '../constants'

const Form = t.form.Form // eslint-disable-line

const styles = StyleSheet.create({
  containerBlue: {
    borderBottomColor: BLUE,
    borderBottomWidth: 2,
    flexDirection: 'row'
  },
  containerPink: {
    borderBottomColor: PINK,
    borderBottomWidth: 2,
    width: W - 40,
    marginTop: 2
  },
  input: {
    height: 100,
    color: PINK,
    top: 28,
    fontFamily: '3270Narrow',
    fontSize: 17,
    justifyContent: 'center'
  }
})

type InputT = {
  value: string,
  onChange: Function
}

const Input = memo<InputT>(({ onChange, value }) => {
  const ref = useRef('')

  const { containerBlue, containerPink } = styles

  return (
    <View style={containerBlue}>
      <View style={containerPink}>
        <Form ref={ref} type={search} options={options} onChange={onChange} value={value} />
      </View>
    </View>
  )
})

export { Input }
