import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, TextInput, Text } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [description, setDescription] = useState('')


    console.log("STATE : ", weight, height, bmi)

    const onPressButton = () => {
        console.log('Calculate button is pressed!!!')
        let output = weight / (((height / 100) * height) / 100)
        setBmi(output.toFixed(2))

        if (output < 18.5)
            setDescription('Underweight')
        else if (output >= 18.5 && output <= 24.99)
            setDescription('Normal')
        else if (output >= 25 && output <= 29.99)
            setDescription('Overweight')
        else if (output >= 30 && output <= 34.99)
            setDescription('Obese')
        else setDescription('Extremely Obese')

    };

    return (
        <View>
            {/* View 1 */}
            <View style={{
                padding: 20, backgroundColor: 'white',
                borderRadius: 10, marginVertical: 10, height: 150, justifyContent: "space-around"
            }}>
                <Text style={{ fontSize: 20 }}> Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    style={{ fontSize: 15 }}
                    placeholder="Input your Weight"
                    keyboardType="numeric"
                    onChangeText={(newWeight) => setWeight(newWeight)}
                />
            </View>
            {/* View 2 */}
            <View style={{
                padding: 20, backgroundColor: 'white',
                borderRadius: 10, marginVertical: 10, height: 150, justifyContent: "space-around"
            }}>
                <Text style={{ fontSize: 20 }}> Height (cm.)</Text>
                <TextInput
                    value={height}
                    style={{ fontSize: 15 }}
                    placeholder="Input your Height"
                    keyboardType="numeric"
                    onChangeText={(newHeight) => setHeight(newHeight)}
                />
            </View>
            {/* View 3 */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {/* View < */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginRight: 10, height: 100,
                    justifyContent: 'center', alignItems: "center", borderRadius: 10
                }}>
                    <Text>{bmi}</Text>
                </View>
                {/* View > */}
                <View style={{
                    flex: 1, backgroundColor: 'white', marginLeft: 10, height: 100,
                    justifyContent: 'center', alignItems: "center", borderRadius: 10
                }}>
                    <Text>{description}</Text>

                </View>
            </View>

            {/* <Button title="Calculate" onPress={onPressButton} /> */}
            
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "pink", borderRadius: 40 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
