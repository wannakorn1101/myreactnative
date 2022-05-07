import React from 'react';
import { View } from 'react-native';
import MyIcon from '../week3/MyIcon';



export default function Section5() {
    return (
        <View style={{ padding: 15}}>
            <View style={{ flexDirection : 'row' , justifyContent : 'space-around' }}>
            <MyIcon title='wifi' name='wifi' size={30} color='blue' />
            <MyIcon title='coffee' name='coffee' size={30} color='blue' />
            <MyIcon title='bath' name='bath' size={30} color='blue' />
            <MyIcon title='car' name='car' size={30} color='blue' />
            <MyIcon title='paw' name='paw' size={30} color='blue' />
        </View>
        </View>
    );
}