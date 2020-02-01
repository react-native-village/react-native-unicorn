//@flow
import  React, { memo } from 'react'
import { View,  StyleSheet, TouchableOpacity } from 'react-native'
import Emoji from "react-native-emoji"
import { CardBorder } from "../CardBorder"
import { win } from "../constants"

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
        briefcase: string,
        cap: string,
        star: string
    }
}
const TabDeveloper = memo<Props>(({ paper, briefcase, cap, star })=>{
    const { container, emoji } = styles
    //const { paper, plug, briefcase, star } = obj
    return (
      <CardBorder>
        <View style={container}>
          <TouchableOpacity>
            <Emoji name={paper} style={emoji} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name={briefcase} style={emoji} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name={cap} style={emoji} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Emoji name={star} style={emoji} />
          </TouchableOpacity>
        </View>
      </CardBorder>
    )
})

export { TabDeveloper }
