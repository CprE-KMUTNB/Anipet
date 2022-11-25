/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React ,{useContext,useEffect} from 'react';
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
  Alert,
  onPress,
  Button,
  ImageBackground,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
const CatC = ({navigation}) =>{
  const {userToken,userInfo,petInfo,setpetInfo,favorite,favData, setfavData, disfavorite,checkfavorite} = useContext(AuthContext);
  const showConfirmDialog = () => {
    Alert.alert(
      'Are your sure?',
      'Are you sure you want to unfavorite this cute pet?',
      [
        {
          text: 'Yes',
          onPress: () => {
            disfavorite(userInfo.username,petInfo.name,petInfo.type);
          },
        },
        {
          text: 'No',
        },
      ]
    );
  };
  const FavButton = (item) => {
    if (userToken){
      if (favData){
              return (
                  <TouchableOpacity
                          onPress={() => {favorite(userInfo.username,item.name,item.type);}}
                          style={styles.button}>
                          <Text style={styles.buttonText}>Like</Text>
                  </TouchableOpacity>
              );
      }
      else {
        return (
            <TouchableOpacity
                    onPress={() => {showConfirmDialog();}}
                    style={styles.buttonRed}>
                    <Text style={styles.buttonText}>unLike</Text>
            </TouchableOpacity>
        );
      }
    }
  }
    useEffect(() => {
      checkfavorite(userInfo.username,petInfo.name,petInfo.type)
      return () => {
      }
    }, [checkfavorite, petInfo.name, petInfo.type, userInfo.username])
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
            // eslint-disable-next-line no-sequences
            onPress={() => {navigation.navigate('Home'),setpetInfo([])}}
            style={styles.backStyle}>
            <Image source={require('../assets/fonts/Register/กลับ.png')}/>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 140, height: 140}}
              source={{uri: petInfo.url}}
            />
          </View>
          <Text style={styles.textStyle}>name  : {petInfo.name}</Text>
          <Text style={styles.textStyle}>info  : {petInfo.info}</Text>
          <Text style={styles.textStyle}>hard  : {petInfo.hard}</Text>
          <Text style={styles.textStyle}>price : {petInfo.price}</Text>
          <Text style={styles.textStyle}>type : {petInfo.type}</Text>
          {FavButton(petInfo)}
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
    marginStart:52,
    width:'62%',
    justifyContent:'center',
    backgroundColor:'#94ffbd',
    borderColor: '#bd94ff',
    borderWidth:4,
    padding:12,
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
  button:{
    width:'40%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#87D38E',
    alignItems:'center',
},
buttonRed:{
    width:'40%',
    padding: 15,
    borderRadius:40,
    backgroundColor:'#de1794',
    alignItems:'center',
},
buttonText:{
    color:'white',
    fontSize:13,
    letterSpacing:1,
},
});