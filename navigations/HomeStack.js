import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ex1 from "../screens/week2/Ex1";
import Ex2 from "../screens/week2/Ex2";
import Ex3 from "../screens/week2/Ex3";
import Ex4 from "../screens/week2/Ex4";
import Ex5 from "../screens/week2/Ex5";
import Ex6 from "../screens/week2/Ex6";
import Ex7 from "../screens/week2/Ex7";
import Ex8 from "../screens/week2/Ex8";
import Ex9 from "../screens/week2/Ex9";
import Ex10 from "../screens/week2/Ex10";
import Ex11 from "../screens/week2/Ex11";
import Ex12 from "../screens/week2/Ex12";
import Home from '../screens/week6/Home';
import Travel from '../screens/week3/Travel';
import Resort from '../screens/week4/Resort';
import Health from '../screens/week5/Health';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" , headerShown : false }}
      />
          <Stack.Screen
            name="Ex1"
            component={Ex1}
            options={{ title: "Exercise 1" }}
          />      
          <Stack.Screen
            name="Ex2"
            component={Ex2}
            options={{ title: "Exercise 2" }}
          />
            <Stack.Screen
            name="Ex3"
            component={Ex3}
            options={{ title: "Exercise 3" }}
          />
            <Stack.Screen
            name="Ex4"
            component={Ex4}
            options={{ title: "Exercise 4" }}
          />
            <Stack.Screen
            name="Ex5"
            component={Ex5}
            options={{ title: "Exercise 5" }}
          />
          <Stack.Screen
            name="Ex6"
            component={Ex6}
            options={{ title: "Exercise 6" }}
          />
          <Stack.Screen
            name="Ex7"
            component={Ex7}
            options={{ title: "Exercise 7" }}
          />
           <Stack.Screen
            name="Ex8"
            component={Ex8}
            options={{ title: "Exercise 8" }}
          />
           <Stack.Screen
            name="Ex9"
            component={Ex9}
            options={{ title: "Exercise 9" }}
          />
          <Stack.Screen
            name="Ex10"
            component={Ex10}
            options={{ title: "Exercise 10" }}
          />
          <Stack.Screen
            name="Ex11"
            component={Ex11}
            options={{ title: "Exercise 11" }}
          />
                    <Stack.Screen
            name="Ex12"
            component={Ex12}
            options={{ title: "Exercise 12" }}
          />
            <Stack.Screen
            name="Travel"
            component={Travel}
            options={{ title: "Travel" }}
          />
          <Stack.Screen
            name="Resort"
            component={Resort}
            options={{ title: "Resort" }}
          />
          <Stack.Screen
            name="Health"
            component={Health}
            options={{ title: "Health" }}
          />
        </Stack.Navigator>
      );
      
}
