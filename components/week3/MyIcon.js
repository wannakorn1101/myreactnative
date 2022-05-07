import React from 'react';
import { View , Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function MyIcon(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
        <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress }> 
            <FontAwesome name={ props.name }  size={ props.size } color={ props.color } />
            <Text>{ props.title }</Text>
        </TouchableOpacity>
        </View>  
    );
}