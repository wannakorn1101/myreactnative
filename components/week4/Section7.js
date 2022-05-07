import React from 'react';
import { View , Text, Image } from 'react-native';

export default function Section7() {
    return (
        <View style={{ }}>
            <View style={{ paddingLeft:15}}>
                    <Text style={{ fontSize:20}}>Room Type</Text>
                </View>
                <View style={{ flexDirection: 'row' , padding:15}}>
                    <View>
                         <Image style={{ flex:1, width:85 ,height : 110, borderRadius: 10}} source={require('../../assets/week3/room-8.jpg')}></Image>
                    </View>
                <View style={{ flexDirection: 'column', paddingLeft:15, justifyContent: 'flex-start' ,alignItems: 'flex-start'}}>
                    <Text>Standard Twin Room</Text>
                    <Text style={{ color: 'red' ,marginTop:30 }}>$399.99</Text>
                    <Text style={{ color: 'blue' }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>  
        </View>
    );
}