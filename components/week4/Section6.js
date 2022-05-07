import React from 'react';
import { View , Text, Image } from 'react-native';

export default function Section6() {
    return (
        <View style={{ flexDirection: 'column' ,padding:15 }}>
            <Text style={{ fontSize: 30}}>Location</Text>
            <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            <View style={{ flexDirection :'row' ,padding:15}}>
                <Image style={{ flex:1 ,resizeMode :'cover', aspectRatio: 16/9}} source={ require('../../assets/week3/map.jpg')}></Image>
        </View>  
        </View> 
    );
}