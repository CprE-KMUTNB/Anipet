/* eslint-disable prettier/prettier */
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
  StyleSheet,
} from 'react-native';

const User = ({navigation}) => {
    return (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFE0F3',
          }}>
        <View>
        <Text style={{fontSize: 25, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-280,right:100}}>
          ลุงใจดี
        </Text>
              {/* setting */}
        <Image
            style={{position:'absolute',top:-280,right:-155}}
            source={require('../assets/fonts/PR/เฟือง.png')}
            />
        <Image
            style={{position:'absolute',top:-230,right:-175}}
            source={require('../assets/User/qeww.png')}
            />
        <TouchableOpacity
          onPress={() => {navigation.navigate('PreRegis');}}
          style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
      );
    };

export default User;

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