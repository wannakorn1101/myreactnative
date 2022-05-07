import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Button } from 'react-native';

export default function Ex2() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 , flexDirection : 'row', alignItems: 'stretch' }}>    
      <View style={{ backgroundColor : '#50E3C2' , width : 100 }}></View>      
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex3")} />
    </View>
  );
}
