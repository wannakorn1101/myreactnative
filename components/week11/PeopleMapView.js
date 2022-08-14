import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import UniversityMarkers from './UniversityMarkers'
import LocationLaravel from '../../services/LocationLaravel'

export default function MyMapView(props) {
  const width = Dimensions.get('screen').width
  const height = Dimensions.get('screen').height

  const [universities, setUniversities] = useState([])
  const loadUniversities = async () => {
    let url_endpoint =
      'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week10/universities.json'
    try {
      let response = await fetch(url_endpoint)
      let items = await response.json()
      //   console.log(items);
      setUniversities(items)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadUniversities()
  }, [])

  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(event) => {
          // console.log("LOCATION CHANGED : " , event);
          if (event.nativeEvent.coordinate) {
            let new_location = {
              coords: event.nativeEvent.coordinate,
              mocked: false,
              timestamp: event.nativeEvent.coordinate.timestamp,
            }
            //SET LOCATION
            props.setLocation(new_location)
            if (props.recordLocation) {
            console.log('SEND TO SERVER')
            LocationLaravel.storeItem({
              user_id: 'Phongpeera Luangpinij',
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude,
            })
            }
          }
        }}>
        {/* <MapView.Marker
          coordinate={{
            latitude: Number(14.1334383),
            longitude: Number(100.6146767),
          }}
          title={"มหาวิทยาลัยราชภัฏวไลยอลงกรณ์ ในพระบรมราชูปถัมภ์"}
          key={"xxxx"}
        /> */}
        <UniversityMarkers items={universities} />
      </MapView>
    )
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>
  }
}