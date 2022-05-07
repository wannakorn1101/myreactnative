import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PokemonTab from './PokemonTab'
import BottomTab from './BottomTab'
import Travel from '../screens/week3/Travel'
import Resort from '../screens/week4/Resort'
import Health from '../screens/week5/Health'

const Stack = createStackNavigator()

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title: 'Pokemon World' }} />
      
    </Stack.Navigator>
  )
}