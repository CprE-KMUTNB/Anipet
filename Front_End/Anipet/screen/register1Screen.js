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
          สมัครสมาชิก
          </Text>
          <Text style={styles.textStyle}>
            user-name*
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeUser}
            value={user}
            placeholder="Username"
          />
          <Text style={styles.textStyle}>
            password*
          </Text>
            <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangePass}
            value={Pass}
            placeholder="Password"
          />
          <Text style={styles.textStyle}>
            ชื่อ-นามสกุล*
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangeName}
            value={Name}
            placeholder="Name"
          />
          <Text style={styles.textStyle}>
            สัตวเลี้ยง (ไม่มีให้ใส่ -)
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={onChangePet}
            value={Pet}
            placeholder="Pet"
          />
          {/* next */}
          <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.buttonStyle}>
                <Image source={require('../assets/fonts/Register/CP.png')} />
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
      marginLeft: 80,
      color: '#D70505',
      fontFamily:'ITIM-REGULAR',
    },
    textStyle:{
      fontSize: 18,
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