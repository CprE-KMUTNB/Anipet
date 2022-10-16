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

const Register2 = ({navigation}) =>{
    const [Mail, onChangeMail] = React.useState(null);
    [Pet, onChangePet] = React.useState(null);
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
            onPress={() => navigation.navigate('Register1')}
            style={{position:'absolute',top:-350,right:120}}>
            <Image source={require('../assets/fonts/Register/กลับ.png')} />
            </TouchableOpacity>
            {/* reg */}
            <Text style={{fontSize: 30, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-80}}>
            สมัครสมาชิก
        </Text>
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-200,right:100}}>
            อีเมล
        </Text>
        <Image
            style={{position:'absolute',top:-170,right:-150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
            />
            <TextInput
            style={{position:'absolute',top:-162,right:100}}
            onChangeText={onChangeMail}
            value={Mail}
            keyboardType="ascii-capable"
        />
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-80,right:-20}}>
            สัตวเลี้ยง (ไม่มีให้ใส่ -)
        </Text>
        <Image
            style={{position:'absolute',top:-50,right:-150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
            />
            <TextInput
            style={{position:'absolute',top:-42,right:100}}
            onChangeText={onChangePet}
            value={Pet}
            keyboardType="ascii-capable"
        />
        {/* pic */}
        <Image
            style={{position:'absolute',top:30,right:-140}}
            source={require('../assets/fonts/Register/นก.png')}
            />
        {/* CP */}
        <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{position:'absolute',top:350,right:-180}}>
            <Image source={require('../assets/fonts/Register/CP.png')} />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
}

export default Register2;