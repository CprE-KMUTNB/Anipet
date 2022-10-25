/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React ,{useContext} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const User = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const {logout, setResLogin} = useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Image
              style={styles.settingStyle}
              source={require('../assets/fonts/PR/เฟือง.png')}
          />
          <Text style={styles.headderStyle}>Hello {userInfo.name}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.textStyle}>Name : {userInfo.name}</Text>
          <Text style={styles.textStyle}>Pet      : {userInfo.pet}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // eslint-disable-next-line no-sequences
            onPress={() => {logout(),navigation.navigate('Login'),setResLogin(false);}}
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
    marginStart:300,
    margin:10,
  },
  detailContainer:{
    width:'80%',
    justifyContent:'center',
    backgroundColor:'white',
    borderColor: '#e0ffec',
    borderWidth:4,
    padding:15,
    borderRadius:20,
  },
  textStyle:{
    fontSize: 18,
    color: '#920059',
    fontFamily:'ITIM-REGULAR',
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
    fontSize: 25,
    fontStyle: 'bold',
    margin: 10,
    color: '#D70505',
    fontFamily:'ITIM-REGULAR',
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
