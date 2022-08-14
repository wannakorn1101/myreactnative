import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import MyMapView from '../../components/week11/MyMapView'
import PeopleMapView from '../../components/week11/PeopleMapView'
import GPS from '../../helpers/GPS'

export default function LocationQuiz() {
  const [location, setLocation] = useState(null)
  //ACTION WHEN ENTER SCREENS
  useEffect(async () => {
    console.log('ENTER SCREEN')
    let loc = await GPS.getLocation()
    if (loc) {
      //console.log("Locatoin : ", loc);
      setLocation(loc)
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <PeopleMapView location={location} setLocation={setLocation} />
    </View>
  )
}