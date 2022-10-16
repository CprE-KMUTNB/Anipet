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

const Register1 = ({navigation}) =>{
    const [user, onChangeUser] = React.useState(null);
    [Pass, onChangePass] = React.useState(null);
    [Name, onChangeName] = React.useState(null);
    return(
      <SafeAreaView
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFE0F3'
        }}>
        <View>
        {/* กลับ */}
        <TouchableOpacity
            onPress={() => navigation.navigate('PreRegister')}
            style={{position:'absolute',top:-350,right:120}}>
            <Image source={require('../assets/fonts/Register/กลับ.png')} />
            </TouchableOpacity>
        {/* reg */}
        <Text style={{fontSize: 30, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-80}}>
        สมัครสมาชิก
        </Text>
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-200,right:50}}>
        user-name*
        </Text>
        <Image
            style={{position:'absolute',top:-170,right:-150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
            />
        <TextInput
        style={{position:'absolute',top:-162,right:100}}
        onChangeText={onChangeUser}
        value={user}
        keyboardType="ascii-capable"
        />
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-80,right:50}}>
        password*
        </Text>
        <Image
            style={{position:'absolute',top:-50,right:-150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
            />
        <TextInput
        style={{position:'absolute',top:-42,right:100}}
        onChangeText={onChangePass}
        value={Pass}
        keyboardType="ascii-capable"
        />
            <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:40,right:45}}>
        ชื่อ-นามสกุล*
        </Text>
        <Image
            style={{position:'absolute',top:80,right:-150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
            />
        <TextInput
        style={{position:'absolute',top:90,right:100}}
        onChangeText={onChangeName}
        value={Name}
        keyboardType="ascii-capable"
        />
        {/* next */}
        <TouchableOpacity
            onPress={() => navigation.navigate('Register2')}
            style={{position:'absolute',top:190,right:-25}}>
            <Image source={require('../assets/fonts/Register/ศร.png')} />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

export default Register1;