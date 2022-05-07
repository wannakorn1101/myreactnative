import React from "react";
import { View, TextInput, Button } from "react-native";
export function Signup(){
    return (
        <View style={{ padding : 20 }}>
            <TextInput placeholder="Input ID" />
            <TextInput placeholder="Input email" />
            <TextInput placeholder="Input address" />
            
            <Button title="Sign Up" color="tomato" />
        </View>
    );
}