/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React ,{useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import { AuthContext } from '../context/AuthContext';
const CatC = ({navigation}) =>{
  const {Data} = useContext(AuthContext);
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.backStyle}>
              <Image source={require('../assets/fonts/Register/กลับ.png')}/>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 140, height: 140}}
              source={{uri: Data.url}}
            />
          </View>
          <Text style={styles.textStyle}>name  : {Data.name}</Text>
          <Text style={styles.textStyle}>info  : {Data.info}</Text>
          <Text style={styles.textStyle}>hard  : {Data.hard}</Text>
          <Text style={styles.textStyle}>price : {Data.price}</Text>
          <Text style={styles.textStyle}>type : {Data.type}</Text>
        </View>
      </SafeAreaView>
    );
}

export default CatC;

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
  backStyle:{
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    marginEnd:320,
  },
  textStyle:{
    fontSize: 18,
    color: 'green',
    margin:5,
  },
  imageContainer:{
    marginStart:60,
    width:'62%',
    justifyContent:'center',
    backgroundColor:'#94ffbd',
    borderColor: '#bd94ff',
    borderWidth:4,
    padding:15,
    borderRadius:20,
  },
  inputContainer:{
    width:'80%',
    justifyContent:'center',
    backgroundColor:'white',
    borderColor: '#e0fffc',
    borderWidth:4,
    padding:15,
    borderRadius:20,
  },
  buttonContainer:{
    width:'70%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
});