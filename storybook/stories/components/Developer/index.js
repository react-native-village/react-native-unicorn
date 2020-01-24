// @flow
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { Avatar, H2, H4 } from '..'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 15
  },
  h2: {
    marginLeft: 15,
    marginRight: 15
  },
  h4: {
    justifyContent: 'center'
  }
})

type DeveloperT = {
  title: string,
  viewStyle: ViewStyleProp
}

const Developer = memo<DeveloperT>(({ title, viewStyle }) => {
  const { container, h2, h4 } = styles
  return (
    <View style={[container, viewStyle]}>
      <Avatar uri="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg" size="medium" />
      <H2 title={title} textStyle={h2} />
      <H4 title="1/123" viewStyle={h4} />
    </View>
  )
})

export { Developer }
