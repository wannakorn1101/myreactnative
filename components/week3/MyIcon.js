import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function MyIcon() {
    return (
        <View style={{ justifyContent : 'center' , alignItems : 'center' }}>
            <FontAwesome name="heart" size={28} color="tomato" />
            <Text>หัวใจ</Text>            
        </View>    
    );
}