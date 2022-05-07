import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex12() {
  return (
    <View style={{ flex: 1,  flexDirection: 'row'}}>
      <View style={{ flex : 1 , backgroundColor : '#4A90E2', alignSelf: 'stretch' }}>    
      </View>
      <View style={{ flex : 1 , backgroundColor : '#50E3C2' , alignSelf: 'stretch' }}>    
      </View>
      <View style={{ flex : 1 , backgroundColor : '#9013FE', alignSelf: 'stretch' }}>    
      </View>
    </View>
  );
}