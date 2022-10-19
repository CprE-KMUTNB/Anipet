/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
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
import {AuthContext} from '../context/AuthContext';

const Login = ({navigation}) => {
  const [username, SetUsername] = useState(null);
  const [password, SetPassword] = useState(null);
  const {login} = useContext(AuthContext);
  return (
    <KeyboardAvoidingView style = {styles.container}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFE0F3',
        }}>
        <View>
          {/* reg */}
          <Text
            style={{
              fontSize: 30,
              fontStyle: 'bold',
              color: '#D70505',
              fontFamily: 'ITIM-REGULAR',
              position: 'absolute',
              top: -270,
              right: -30,
            }}>
            Login
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontStyle: 'bold',
              color: '#D70505',
              fontFamily: 'ITIM-REGULAR',
              position: 'absolute',
              top: -200,
              right: 50,
            }}>
            Username
          </Text>
          <Image
            style={{position: 'absolute', top: -170, right: -150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
          />
          <TextInput
            style={{position: 'absolute', top: -162, right: 100}}
            onChangeText={text => SetUsername(text)}
            value={username}
            keyboardType="ascii-capable"
          />
          <Text
            style={{
              fontSize: 18,
              fontStyle: 'bold',
              color: '#D70505',
              fontFamily: 'ITIM-REGULAR',
              position: 'absolute',
              top: -80,
              right: 60,
            }}>
            Password
          </Text>
          <Image
            style={{position: 'absolute', top: -50, right: -150}}
            source={require('../assets/fonts/Register/ว่าง.png')}
          />
          <TextInput
            style={{position: 'absolute', top: -42, right: 100}}
            onChangeText={text => SetPassword(text)}
            value={password}
            keyboardType="ascii-capable"
          />
          {/* Login */}
          <TouchableOpacity
            onPress={() => {login(username,password);}}
            style={{position: 'absolute', top: 70, right: -110}}>
            <Image source={require('../assets/fonts/Register/Login.png')} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Login;
