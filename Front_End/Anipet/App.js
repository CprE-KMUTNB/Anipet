import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  style,
  TextInput,
  StyleSheet,
  onPress,
  Button,
  ImageBackground,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from './screen/home';
import Login from './screen/login';
import PreRegister from './screen/preRegister';
import Register1 from './screen/register1';
import Register2 from './screen/register2';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" options={{headerShown:false}} />
        <Stack.Screen component={PreRegister} name="PreRegister" options={{headerShown:false}} />
        <Stack.Screen component={Register1} name="Register1" options={{headerShown:false}} />
        <Stack.Screen component={Register2} name="Register2" options={{headerShown:false}} />
        <Stack.Screen component={Login} name="Login" options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;