//@flow
import React, { memo } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Emoji from "react-native-emoji"
import { CardBorder } from "../CardBorder"
import { win } from '../constants'

const styles = StyleSheet.create({
    container:{
        width: win.width/1.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    emoji: {
        fontSize: 20
    }
})
type Props = {
    obj: {
        paper: string,
        plug: string,
        briefcase: string,
        star: string
    }
}

const TabCompany = memo<Props>(({ paper, plug, briefcase, star })=>{
    const { container, emoji } = styles
    //const { paper, plug, briefcase, star } = obj
    return(
      <CardBorder>
        <View style={container}>
          <TouchableOpacity>
            <Emoji name={paper} style={emoji} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name={plug} style={emoji} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name={briefcase} style={emoji} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name={star} style={emoji} />
          </TouchableOpacity>
        </View>
      </CardBorder>
    )
})

export  { TabCompany }
