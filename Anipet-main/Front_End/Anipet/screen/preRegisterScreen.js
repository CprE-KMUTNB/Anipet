/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React ,{useState,useContext} from 'react';
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
  Pressable,
  Alert,
  Modal,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
const PreRegister = ({navigation}) =>{
  const {setResRegister, setResLogin} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
          {/* setting */}
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Setting has been closed.");
            setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text 
            style={styles.modalText}>Setting</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close Setting</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.cc]}
        onPress={() => setModalVisible(true)}
      >
                    <Image
                style={styles.settingStyle}
                source={require('../assets/fonts/PR/เฟือง.png')}
                resizeMode="stretch"
                />
      </Pressable>

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
            // eslint-disable-next-line no-sequences
            onPress={() => {navigation.navigate('Login'),
              setResLogin(false)}}
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
    fontSize:20,
    fontWeight:'bold',
    letterSpacing:1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0
  },
  modalView: {
    width: '95%',
    height:'80%',
    margin: 20,
    backgroundColor: "#FF7CA3",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button2: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  cc: {
    width:80
  },
  buttonClose: {
    backgroundColor: "#FFE0F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontWeight: "bold",
    fontSize:20,
    marginBottom: 450,
    textAlign: "center"
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  }
});