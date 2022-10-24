/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React ,{useContext} from 'react';
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
import { AuthContext } from '../context/AuthContext';
const PreRegister = ({navigation}) =>{
  const {setResRegister} = useContext(AuthContext);
    return (
      <SafeAreaView style={styles.container}>
        <View>
          {/* setting */}
          <Image
              style={styles.settingStyle}
              source={require('../assets/fonts/PR/เฟือง.png')}
              />
          <Image
              style={styles.settingStyle}
              source={require('../assets/induce.png')}
            />
        </View>
          {/* ปุ่มregister */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // eslint-disable-next-line no-sequences
            onPress={() => {navigation.navigate('Register1'),
              setResRegister(false)}}
            style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {navigation.navigate('Login')}}
            style={styles.buttonOutline}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default PreRegister;

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#FFE0F3',
  },
  settingStyle:{
    margin:10,
  },
  buttonContainer:{
    width:'70%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  button:{
    width:'100%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#87D38E',
    alignItems:'center',
  },
  buttonOutline:{
    marginTop:10,
    width:'100%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#FF7CA3',
    alignItems:'center',
  },
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
  },
});