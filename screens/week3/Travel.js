import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Card from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import Menu from '../../components/week3/Menu';
import MyIcon from '../../components/week3/MyIcon';
import Signup from '../../components/week3/Signup';
import { useNavigation } from '@react-navigation/native';


export default function Travel() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <Text> Week 3 </Text>
                <Menu />
                <Card />
                <Hotel />
                <Signup />
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange' />
                <MyIcon title='บ้าน' name='home' size={30} color='orange' />
                <MyIcon title='แก้ไข' name='edit' size={30} color='orange' />
                <MyIcon title='ลบ' name='trash' size={30} color='orange' />
            </View>
            <Button title="กลับ" onPress={() => navigation.goBack("")} />
        </ScrollView>
        </View>
    );
}