import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Button } from 'react-native';


export default function Ex12() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1,  flexDirection: 'row'}}>
      <View style={{ flex : 1 , backgroundColor : '#4A90E2', alignSelf: 'stretch' }}>    
      </View>
      <View style={{ flex : 1 , backgroundColor : '#50E3C2' , alignSelf: 'stretch' }}>    
      </View>
      <View style={{ flex : 1 , backgroundColor : '#9013FE', alignSelf: 'stretch' }}>    
      </View>
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex1")} />
    </View>
  );
}