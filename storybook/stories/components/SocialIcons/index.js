// @flow
/* eslint-disable */
import React, { memo, useState, useEffect } from 'react'
import { Text, Alert, Modal, StyleSheet, Image, TouchableOpacity, Platform, View, FlatList } from 'react-native'
import type { ImageStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import RNFetchBlob from 'rn-fetch-blob'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#fff'
  },
  starStyle: {
    width: 32,
    height: 32
  },
  faviconStyle: {
    position: 'absolute',
    width: 15,
    height: 15
  }
})

type SocialIconsT = {
  onPress: Function,
  www: string
}

const data = [
  {
    id: '0',
    uri: 'https://github.com'
  },
  {
    id: '1',
    uri: 'https://yandex.ru'
  },
  {
    id: '2',
    uri: 'https://mail.ru'
  }
]

const SocialIcons = memo<SocialIconsT>(({ onPress }) => {
  const [favicons, setFavicons] = useState(data)

  const getFavicon = async (uri: string) => {
    let arr = []
    try {
      const respone = await RNFetchBlob.config({ fileCache: true }).fetch(
        'GET',
        `https://s2.googleusercontent.com/s2/favicons?domain=${uri}`
      )
      const path = respone.path()
      console.log('path', path)
      arr.push(path)
    } catch (e) {
      console.error(e) // eslint-disable-line
    }
    console.log('arr', arr)
  }

  const { container, starStyle, faviconStyle } = styles

  const renderItem = ({ item: { uri } }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={container}>
          <Image style={faviconStyle} source={{ uri: Platform.OS === 'android' ? 'file://' + '' : '' + '' }} />
        </View>
      </TouchableOpacity>
    )
  }

  const _keyExtractor = obj => obj.id.toString()

  const [modal, setModal] = useState(false)
  const _onPress = () => setModal(true)

  return (
    <>
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <TouchableOpacity onPress={_onPress}>
            <Image style={starStyle} source={require('./plus.png')} />
          </TouchableOpacity>
        }
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
        }}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Hello World!</Text>

            <TouchableOpacity onPress={() => setModal(!modal)}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
})

//<Image style={faviconStyle} source={{ uri: Platform.OS === 'android' ? 'file://' + uri : '' + uri }} />
//<Image style={[starStyle, imageStyle]} source={require('./plus.png')} />
export { SocialIcons }
