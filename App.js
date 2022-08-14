// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Welcome from './screens/Welcome';
// import Ex1 from './screens/week2/Ex1';
// import Ex2 from './screens/week2/Ex2';
// import Ex3 from './screens/week2/Ex3';
// import Ex4 from './screens/week2/Ex4';
// import Ex5 from './screens/week2/Ex5';
// import Ex6 from './screens/week2/Ex6';
// import Ex7 from './screens/week2/Ex7';
// import Ex8 from './screens/week2/Ex8';
// import Ex9 from './screens/week2/Ex9';
// import Ex10 from './screens/week2/Ex10';
// import Ex11 from './screens/week2/Ex11';
// import Ex12 from './screens/week2/Ex12';
// import Travel from './screens/week3/Travel';
// import Resort from './screens/week4/Resort';
// import Health from './screens/week5/Health';
// import Home from './screens/week6/Home';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import HomeStack from './navigations/HomeStack';
import RootStack from './navigations/RootStack';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {/* <HomeStack /> */}
        {/* <BottomTab /> */}
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>

  );
}