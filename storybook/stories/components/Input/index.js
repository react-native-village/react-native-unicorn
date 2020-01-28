// @flow
import React, { memo, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import t from 'tcomb-form-native'
import { search, options } from '../Form'
import { W, BLUE, PINK, WHITE } from '../constants'

const Form = t.form.Form // eslint-disable-line

type InputT = {
  onPress: Function
}

const container = {
  borderWidth: 1,
  borderRadius: 15,
  height: 50,
  borderColor: WHITE
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: W,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent'
  },
  containerBlue: {
    ...container,
    borderColor: BLUE,
    height: 50,
    flexDirection: 'row'
  },
  containerPink: {
    ...container,
    borderColor: PINK,
    width: W - 40,
    height: 50,
    bottom: 3,
    marginTop: 1
  }
})

const Input = memo<InputT>(() => {
  const [value, setValue] = useState({
    value: ''
  })

  const ref = useRef('')

  const { containerBlue, containerPink } = styles

  return (
    <View style={styles.container}>
      <View style={containerBlue}>
        <View style={containerPink}>
          <Form ref={ref} type={search} options={options} onChange={text => setValue(text)} value={value} />
        </View>
      </View>
    </View>
  )
})

export { Input }
