//@flow
import React, { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    icon:{

    }
})
type Props = {
    obj: {

    }
}

const TabCompany = memo<Props>(({ title })=>{
    const { icon } = styles
    return(
      <View>
        <Text>{ title }</Text>
      </View>
    )
})

export  { TabCompany }
