import React from 'react';
import { View , Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop: -50, margin: 15, padding:15, backgroundColor: 'silver', borderRadius: 10, alignItems: 'center'}}>
            <Text style={{ fontSize :30}}>HHilton San Francisco</Text> 
            <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star" size={20} color="yellow" />
                <FontAwesome name="star-half" size={20} color="yellow" />
            </View>
            <Text style={{ textAlign: 'center'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </View>
    );
}