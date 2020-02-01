//@flow
import React, { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    icon:{
        color: '#fff'
    }
})
type Props = {
    obj: {

    }
}

const TabCompany = memo<Props>(({ title })=>{
    const { icon } = styles
    return(
      <View style={icon}>
        <Text style={icon}>{ title }</Text>
      </View>
    )
})

export  { TabCompany }
