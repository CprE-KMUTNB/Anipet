/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useContext, useEffect} from 'react';
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
import { AuthContext } from '../context/AuthContext';

const Register1 = ({navigation}) =>{
  const {register, ResRegister} = useContext(AuthContext);
  const [username, onChangeUser] = useState(null);
  const [password, onChangePass] = useState(null);
  const [Name, onChangeName] = useState(null);
  const [pet, onChangePet] = useState(null);
  useEffect(() => {
    const checkRegister = () => {
        if (ResRegister === true){
          navigation.navigate('Login');
      }
    };
    checkRegister();
    return () => {
    };
  }, [ResRegister, navigation]);
  return (
    <KeyboardAvoidingView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3',
      }}>
      <SafeAreaView>
        <TouchableOpacity
            onPress={() => navigation.navigate('PreRegis')}
            style={styles.backStyle}>
            <Image source={require('../assets/fonts/Register/กลับ.png')} />
        </TouchableOpacity>
        <View>
          {/* reg */}
          <Text style={styles.headderStyle}>
          Register
          </Text>
          <Text style={styles.textStyle}>
            Name-surname*
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeName}
            value={Name}
            placeholder="Name"
          />
          <Text style={styles.textStyle}>
            Username*
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeUser}
            value={username}
            placeholder="Username"
          />
          <Text style={styles.textStyle}>
            Password*
          </Text>
            <TextInput
              secureTextEntry={true}
              style={styles.textInputStyle}
              onChangeText={onChangePass}
              value={password}
              placeholder="Password"
            />
          <Text style={styles.textStyle}>
            Pet
          </Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={onChangePet}
              value={pet}
              placeholder="Pet"
            />
          {/* next */}
          <View>
            <TouchableOpacity
                onPress={() => {register(Name,username,password,pet);}}
                style={styles.buttonStyle}>
                <Image source={require('../assets/navbar/CP4.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Register1;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textInputStyle:{
      height:50,
      borderWidth:1,
      paddingLeft:20,
      margin:12,
      marginRight: 0,
      marginLeft: 0,
      borderColor: '#FFABC4',
      borderRadius: 25,
      backgroundColor: 'white',
    },
    headderStyle:{
      fontSize: 30,
      fontStyle: 'bold',
      marginLeft: 110,
      color: '#D70505',
      fontFamily:'ITIM-REGULAR',
    },
    textStyle:{
      fontSize: 18,
      marginRight:10,
      color: '#D70505',
      fontFamily:'ITIM-REGULAR',
    },
    buttonStyle:{
      marginLeft:230,
    },
    backStyle:{
      marginRight:280,
    },
});