import React from 'react';
import { View , Image } from 'react-native';

export default function Section1() {
    return (
        <View style={{ }}>
            <View style={{ flexDirection : 'row' }}>
                <Image style={{ flex :1 ,resizeMode : "cover" , aspectRatio : 16/9 }} source={ require('../../assets/week3/room-6.jpg')} />
            </View>
        </View>
    );
}