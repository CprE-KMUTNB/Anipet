/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
// import type {Node} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Home from '../screen/homeScreen';
import Login from '../screen/loginScreen';
import PreRegister from '../screen/preRegisterScreen';
import Register1 from '../screen/register1Screen';
import Register2 from '../screen/register2Screen';
import { AuthContext, AuthProvider } from './context/AuthContext';

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Home} name="Home" options={{headerShown:false}} />
            <Stack.Screen component={PreRegister} name="PreRegister" options={{headerShown:false}} />
            <Stack.Screen component={Register1} name="Register1" options={{headerShown:false}} />
            <Stack.Screen component={Register2} name="Register2" options={{headerShown:false}} />
            <Stack.Screen component={Login} name="Login" options={{headerShown:false}} />
        </Stack.Navigator>
    );
};

export default AuthStack;
