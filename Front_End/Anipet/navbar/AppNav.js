/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
// import type {Node} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { AuthContext, AuthProvider } from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);
    if (isLoading){
        return (
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
          </View>
        );
    }
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
};

export default AppNav;
