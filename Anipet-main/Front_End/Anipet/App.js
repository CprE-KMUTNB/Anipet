/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
// import type {Node} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { AuthContext, AuthProvider } from './context/AuthContext';
import AppNav from './navbar/AppNav';

const App = () => {
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
};

export default App;
