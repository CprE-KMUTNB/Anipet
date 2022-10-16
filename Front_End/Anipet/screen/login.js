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

const Login = ({navigation}) =>{
    const [Username, onChangeUssername] = React.useState(null);
    [Password, onChangePassword] = React.useState(null);
    return(
        <SafeAreaView
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFE0F3'
            }}>
        <View>
                {/* reg */}
                <Text style={{fontSize: 30, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-30}}>
            Login
        </Text>
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-200,right:50}}>
            Username
        </Text>
        <Image
            style={{position:'absolute',top:-170,right:-150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
            />
            <TextInput
            style={{position:'absolute',top:-162,right:100}}
            onChangeText={onChangeUssername}
            value={Username}
            keyboardType="ascii-capable"
        />
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-80,right:60}}>
            Password
        </Text>
        <Image
            style={{position:'absolute',top:-50,right:-150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
            />
            <TextInput
            style={{position:'absolute',top:-42,right:100}}
            onChangeText={onChangePassword}
            value={Password}
            keyboardType="ascii-capable"
        />
        {/* Login */}
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{position:'absolute',top:70,right:-110}}>
            <Image source={require('../assets/fonts/Register/Login.png')} />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

export default Login;