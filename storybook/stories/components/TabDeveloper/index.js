//@flow
import  React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  text:{
      color: '#fff'
  }
})

type Props={

}
const TabDeveloper = memo<Props>(({ title })=>{
    const { text } = styles
    return (
      <View>
        <Text style={text}>{title}</Text>
      </View>
    )
})

export { TabDeveloper }
