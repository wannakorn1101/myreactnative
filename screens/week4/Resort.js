import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Section1 from '../../components/week4/Section1';
import Section2 from '../../components/week4/Section2';
import Section3 from '../../components/week4/Section3';
import Section4 from '../../components/week4/Section4';
import Section5 from '../../components/week4/Section5';
import Section6 from '../../components/week4/Section6';
import Section7 from '../../components/week4/Section7';
import Section8 from '../../components/week4/Section8';

export default function Resort() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 10 , margin : 10 }}>

                <Text>Quiz of Week 4 </Text>
                <Text></Text>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
            </View>
            <Button title="กลับ" onPress={() => navigation.goBack("")} />
        </ScrollView>
        </View>
    );
}