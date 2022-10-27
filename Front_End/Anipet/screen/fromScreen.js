/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React ,{useContext,useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  style,
  StyleSheet,
  onPress,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import CheckBox from '@react-native-community/checkbox';
const From1 = ({navigation}) =>{
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [isSelected7, setSelection7] = useState(false);
    const [isSelected8, setSelection8] = useState(false);
    const [isSelected9, setSelection9] = useState(false);
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.backStyle}>
              <Image source={require('../assets/fonts/Register/กลับ.png')}/>
        </TouchableOpacity>
        <View style={styles.viewhead}>
        <Text
        style={styles.texthead}>
            มาทำแบบสอบถามกัน
        </Text>
        </View>
        <View style={styles.viewmargin}>
        <Text
        style={[styles.minihead]}>
            LifeStyleของคุณ
        </Text>
        <Image
            style={styles.Star}
            source={require('../assets/fonts/Register/Star.png')}/>
        <Text
        style={[styles.content,styles.frommargin]}>
            ชอบออกไปเที่ยว
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.content,styles.frommargin]}>
            นานๆไปเที่ยวที
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.content,styles.frommargin]}>
            ชอบอยู่บ้าน
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.minihead]}>
            LifeStyleของคุณ
        </Text>
        <Image
            style={styles.Star}
            source={require('../assets/fonts/Register/Star.png')}/>
        <Text
        style={[styles.content,styles.frommargin]}>
            ชอบออกไปเที่ยว
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.content,styles.frommargin]}>
            นานๆไปเที่ยวที
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected5}
          onValueChange={setSelection5}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.content,styles.frommargin]}>
            ชอบอยู่บ้าน
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected6}
          onValueChange={setSelection6}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.minihead]}>
            LifeStyleของคุณ
        </Text>
        <Image
            style={styles.Star}
            source={require('../assets/fonts/Register/Star.png')}/>
        <Text
        style={[styles.content,styles.frommargin]}>
            ชอบออกไปเที่ยว
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected7}
          onValueChange={setSelection7}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.content,styles.frommargin]}>
            นานๆไปเที่ยวที
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected8}
          onValueChange={setSelection8}
          style={styles.checkbox}
        />
        </View>
        <Text
        style={[styles.content,styles.frommargin]}>
            ชอบอยู่บ้าน
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected9}
          onValueChange={setSelection9}
          style={styles.checkbox}
        />
        </View>
        </View>
        <View style={[styles.okay]}>
        <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}>
          <Text style={[styles.contentokay]}>
              เสร็จสิ้น
          </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

export default From1;

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#FFE0F3',
  },
 texthead:{
    fontSize:28,
    fontWeight:'bold',
    color:'red',
 },
 minihead:{
    fontSize:24,
    fontWeight:'bold',
    color:'red',
 },
 content:{
    fontSize:22,
    color:'red',

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
  viewmargin:{
    marginTop:20,
    marginVertical:30
  },
  viewhead:{
    marginTop:10
  },
  frommargin:{
    padding:5,
    paddingRight:200,
  },
  okay:{
    width:100,
    height:40,
    borderWidth:3,
    borderColor:'#e3ffe0',
    backgroundColor:'#CDF2C7',
    borderRadius:12,
  },
  contentokay:{
    fontSize:18,
    color:'red',
    paddingLeft:16,
    marginTop:5
},
  Star: {
    marginLeft:185,
    marginTop:-30,
    width: 26,
    height: 26,
  },
  checkboxContainer: {
    marginLeft:300,
    marginTop:-32
  },
  checkbox: {
    alignSelf: "center",
  },
});