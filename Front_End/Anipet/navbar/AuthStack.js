/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
// import type {Node} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
import Home from '../screen/homeScreen';
import Login from '../screen/loginScreen';
import PreRegister from '../screen/preRegisterScreen';
import Register1 from '../screen/register1Screen';
import Register2 from '../screen/register2Screen';
import Map from '../screen/MapScreen';
import { AuthContext, AuthProvider } from './context/AuthContext';

const AuthStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen component={Map} name="map" options={{headerShown:false}} />
            <Tab.Screen component={Home} name="Home" options={{headerShown:false}} />
            <Tab.Screen component={UserStackScreen} name="PreRegister" options={{headerShown:false}} />
        </Tab.Navigator>
    );
};

function UserStackScreen () {
    return (
        <UserStack.Navigator>
            <UserStack.Screen component={PreRegister} name="PreRegis" options={{headerShown:false}} />
            <UserStack.Screen component={Register1} name="Register1" options={{headerShown:false}} />
            <UserStack.Screen component={Register2} name="Register2" options={{headerShown:false}} />
            <UserStack.Screen component={Login} name="Login" options={{headerShown:false}} />
        </UserStack.Navigator>
    );
}
export default AuthStack;
