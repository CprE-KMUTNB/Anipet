/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

const Register1 = ({navigation}) =>{
    const [user, onChangeUser] = React.useState(null);
  [Pass, onChangePass] = React.useState(null);
  [Name, onChangeName] = React.useState(null);
  [Mail, onChangeMail] = React.useState(null);
  [Pet, onChangePet] = React.useState(null);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3',
      }}>
    <View>
      {/* กลับ */}
    <TouchableOpacity
        onPress={() => navigation.navigate('PreRegis')}
        style={{position:'absolute',top:200,right:120}}>
        <Image source={require('../assets/fonts/Register/กลับ.png')} />
        </TouchableOpacity>
      {/* reg */}
      <Text style={{fontSize: 30, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-290,right:-80}}>
      สมัครสมาชิก
    </Text>
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-255,right:50}}>
      user-name*
    </Text>
    <Image
        style={{position:'absolute',top:-225,right:-150}}
        source={require('../assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-215,right:100}}
      onChangeText={onChangeUser}
      value={user}
      keyboardType="ascii-capable"
    />
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-150,right:50}}>
      password*
    </Text>
    <Image
        style={{position:'absolute',top:-125,right:-150}}
        source={require('../assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-115,right:100}}
      onChangeText={onChangePass}
      value={Pass}
      keyboardType="ascii-capable"
    />
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-50,right:45}}>
      ชื่อ-นามสกุล*
    </Text>
    <Image
        style={{position:'absolute',top:-20,right:-150}}
        source={require('../assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-10,right:100}}
      onChangeText={onChangeName}
      value={Name}
      keyboardType="ascii-capable"
    />
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:60,right:-20}}>
      สัตวเลี้ยง (ไม่มีให้ใส่ -)
    </Text>
    <Image
        style={{position:'absolute',top:100,right:-150}}
        source={require('../assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:110,right:100}}
      onChangeText={onChangePet}
      value={Pet}
      keyboardType="ascii-capable"
    />
    {/* next */}
    <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{position:'absolute',top:205,right:-180}}>
        <Image source={require('../assets/fonts/Register/CP.png')} />
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Register1;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});