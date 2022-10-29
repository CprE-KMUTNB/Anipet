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
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import CheckBox from '@react-native-community/checkbox';
import Dropdown from 'react-native-input-select';
const From1 = ({navigation}) =>{
  const {tradeData,predic} = useContext(AuthContext);
  const [petStyle, setpetStyle] = useState()
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);
  const [isSelected9, setSelection9] = useState(false);
  const [salary, setsalary] = useState();
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
            your Lifestyle
        </Text>
        <View style={styles.DropdownStyle}>
          <Dropdown
            placeholder="Select an option..."
            options={[
              { name: 'Like to travel', style: 'like to travel' },
              { name: 'นานๆไปเที่ยวที', style: 'Chill' },
              { name: 'StayHome', style: 'StayHome' },
            ]}
            optionLabel={'name'}
            optionValue={'style'}
            selectedValue={petStyle}
            onValueChange={(value) => setpetStyle(value)}
            primaryColor={'green'}
          />
        </View>
        <Text
        style={[styles.minihead]}>
            อยากเลี้ยงสัตว์ประเภทไหน
        </Text>
        <Text
        style={[styles.content,styles.frommargin]}>
            สัตว์บก
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
            สัตว์น้ำ
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
            สัตว์ปีก
        </Text>
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected9}
          onValueChange={setSelection9}
          style={styles.checkbox}
        />
        </View>
        </View>
        <Text
        style={[styles.minihead]}>
            มีงบประมาณมากแค่ไหน
        </Text>
        <TextInput
          style={styles.textInputStyle}
          value={salary}
          placeholder="your salary"
          underlineColorAndroid="transparent"
          onChangeText={(text) => setsalary(text)}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // eslint-disable-next-line no-sequences
            onPress={() => {tradeData(petStyle),navigation.navigate('Predic'),predic(salary,petStyle)}}
            style={styles.button}>
            <Text style={styles.buttonText}>Finish</Text>
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
  margin:5,
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
    marginVertical:30,
  },
  viewhead:{
    marginTop:10,
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
    marginTop:5,
},
  Star: {
    marginLeft:185,
    marginTop:-30,
    width: 26,
    height: 26,
  },
  Star2: {
    marginLeft:255,
    marginTop:-30,
    width: 26,
    height: 26,
  },
  Star3: {
    marginLeft:280,
    marginTop:-30,
    width: 26,
    height: 26,
  },
  checkboxContainer: {
    marginLeft:300,
    marginTop:-32,
  },
  checkbox: {
    alignSelf: 'center',
  },
  textInputStyle:{
    width:'80%',
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
  buttonText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
  },
});