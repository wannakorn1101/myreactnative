import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

export default function Event(props) {
  const [events, setEvents] = useState([])
  const loadEvents = async () => {
    try {
      let promise = await fetch(
        'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json',
      )
      let data = await promise.json()
      console.log('Load Data : ', data)
      //SET STATE
      setEvents(data)
    } catch (error) {
      console.log('ERROR : ', error)
    }
  }

  useEffect(() => {
    loadEvents()
  }, [])

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Up Comming Events</Text>
      <Text style={{ color: 'gray', marginVertical: 10 }}>What's the Worst That Could Happend</Text>
      <FlatList
        horizontal={true}
        data={events}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri)
          return (
            <View style={{ marginRight: 10 }}>
              <Image
                style={{
                  width: 250,
                  height: 150,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
                }}
                source={{ uri: item.uri }}
              />
              <View
                style={{
                  backgroundColor: 'transparent',
                  width: 250,
                  height: 60,
                  padding: 5,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderColor: 'gray',
                  borderWidth: 1,
                  flexDirection: 'row',
                }}>
                <View>
                <Text style={{ fontSize: 16, textAlign: 'center', color: 'red' }}>{item.month}</Text>
                  <Text style={{ fontSize: 13, textAlign: 'center', color: 'gray' }}>{item.date}</Text>
                </View>
                <View style={{ marginLeft: 10}}>
                  <Text style={{ fontSize: 16 }}>{item.title}</Text>
                  <Text style={{ fontSize: 12, color: 'gray' }}>{item.datetime}</Text>
                  <Text style={{ fontSize: 12, color: 'gray' }}>{item.place}</Text>
                </View>
              </View>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}