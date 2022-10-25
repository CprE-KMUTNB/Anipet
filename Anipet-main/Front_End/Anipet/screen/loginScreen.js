/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useContext, useState, useEffect} from 'react';
import {
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
  const {login, ResLogin, setResLogin} = useContext(AuthContext);
  useEffect(() => {
    const checkLogin = () => {
        if (ResLogin === true){
          navigation.navigate('User');
      }
    };
    checkLogin();
    return () => {
    };
  }, [ResLogin, navigation]);
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity
              onPress={() => navigation.navigate('PreRegis')}
              style={styles.backStyle}>
              <Image source={require('../assets/fonts/Register/กลับ.png')}/>
        </TouchableOpacity>
        <View style={styles.probStyle}>
          <Image source={require('../assets/logo.png')} style={styles.tinyLogo}/>
        </View>
        <View style={styles.inputContainer} behavior="padding"
          keyboardVerticalOffset = "40" >
          <Text style= {styles.headderStyle}>Login</Text>
          <Text style={styles.textStyle}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={text => SetUsername(text)}
            value={username}
          />
          <Text style={styles.textStyle}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => SetPassword(text)}
            value={password}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              // eslint-disable-next-line no-sequences
              onPress={() => {login(username,password),setResLogin(false);}}
              style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FFE0F3',
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
  input:{
    backgroundColor:'white',
    borderColor: '#D9D9D9',
    borderWidth:1,
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:20,
    marginTop:5,
  },
  logoStyle:{
    justifyContent:'center',
    margin:1,
  },
  headderStyle:{
    fontSize: 25,
    fontStyle: 'bold',
    color: '#D70505',
    justifyContent:'center',
    margin:10,
    marginStart:115,
  },
  textStyle:{
    fontSize: 18,
    color: 'green',
  },
  backStyle:{
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd:320,
  },
  buttonContainer:{
    width:'70%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginStart:50,
  },
  button:{
    width:'100%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#87D38E',
    alignItems:'center',
  },
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
  },
  probContainer:{
    borderWidth:3,
    borderColor:'#e3ffe0',
    marginTop:10,
    backgroundColor:'#e0fffc',
    padding:5,
    borderRadius:30,
  },
  probStyle:{
    justifyContent:'center',
    alignItems:'center',
  },
  tinyLogo: {
    margin:10,
    width: 150,
    height: 150,
  },
});
