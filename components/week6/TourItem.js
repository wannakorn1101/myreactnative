import React from 'react'
import { Image, Text, View } from 'react-native'

export default function TourItem(props) {
  return (
    <View style={{ marginRight: 10 }}>
      <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: props.item.uri }} />
      <View
        style={{
          backgroundColor: 'black',
          width: 250,
          height: 35,
          opacity: 0.6,
          padding: 5,
          marginTop: -35,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>{props.item.title}</Text>
      </View>
    </View>
  )
}