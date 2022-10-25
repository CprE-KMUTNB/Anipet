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

const Edit = ({navigation}) =>{
  const {edit, userInfo} = useContext(AuthContext);
  const [newName, setnewName] = useState(null);
  const [newpet, setnewPet] = useState(null);
  return (
    <KeyboardAvoidingView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3',
      }}>
      <SafeAreaView>
        <TouchableOpacity
            onPress={() => navigation.navigate('User')}
            style={styles.backStyle}>
            <Image source={require('../assets/fonts/Register/กลับ.png')} />
        </TouchableOpacity>
        <View>
          {/* reg */}
          <Text style={styles.headderStyle}>
          แก้ไขข้อมูล
          </Text>
          <Text style={styles.textStyle}>
            ชื่อ-นามสกุล
          </Text>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={setnewName}
            value={newName}
            placeholder= {userInfo.name}
          />
          <Text style={styles.textStyle}>
            สัตวเลี้ยง (ไม่มีให้ใส่ -)
          </Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={setnewPet}
              value={newpet}
              placeholder= {userInfo.pet}
            />
          {/* next */}
          <View>
            <TouchableOpacity
                onPress={() => {edit(newName,newpet),navigation.navigate('User');}}
                style={styles.buttonStyle}>
                <Image source={require('../assets/fonts/Register/CP.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Edit;

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