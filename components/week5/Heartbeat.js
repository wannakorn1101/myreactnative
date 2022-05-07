import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [heart, setHeart] = useState('0')
    const onPressHeart = () => {
        setHeart(Number(heart) + 1)
    };

    return (
        <View style={{ flex : 1 , marginTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ justifyContent: 'space-around',flexDirection: 'row' }}>
                <TouchableOpacity onPress={onPressHeart}>
                <FontAwesome name="heart"  size={28} color="tomato" />
                <Text style={{ fontSize: 30, textAlign: 'center' }}>{heart}</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
