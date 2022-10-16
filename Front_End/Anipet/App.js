/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" options={{headerShown:false}} />
        <Stack.Screen component={PreRegister} name="PreRegister" options={{headerShown:false}} />
        <Stack.Screen component={Register1} name="Register1" options={{headerShown:false}} />
        <Stack.Screen component={Register2} name="Register2" options={{headerShown:false}} />
        <Stack.Screen component={Login} name="Login" options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Home = ({navigation}) => { 
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3'
      }}>
    <View>
    
    {/* search */}
    <Image
        style={{position:'absolute',top:-350,right:-149}}
        source={require('./assets/fonts/Home/หา.png')}
        />
    {/* หมวดหมู่ */}
    <Image
        style={{position:'absolute',top:-270,right:80}}
        source={require('./assets/fonts/Home/บก.png')}
        />
    <Image
        style={{position:'absolute',top:-270,right:-49}}
        source={require('./assets/fonts/Home/บก.png')}
        />
    <Image
        style={{position:'absolute',top:-270,right:-170}}
        source={require('./assets/fonts/Home/บก.png')}
        />    
    {/* หลังม่วง */}
    <Image
        style={{position:'absolute',top:-104,right:53}}
        source={require('./assets/fonts/Home/ชื่อ.png')}
        />
    <Image
        style={{position:'absolute',top:65,right:53}}
        source={require('./assets/fonts/Home/ชื่อ.png')}
        />
    <Image
        style={{position:'absolute',top:225,right:53}}
        source={require('./assets/fonts/Home/ชื่อ.png')}
        />
    <Image
        style={{position:'absolute',top:-200,right:40}}
        source={require('./assets/fonts/Home/หลัง.png')}
        />
    <Image
        style={{position:'absolute',top:-30,right:40}}
        source={require('./assets/fonts/Home/หลัง.png')}
        />
    <Image
        style={{position:'absolute',top:130,right:40}}
        source={require('./assets/fonts/Home/หลัง.png')}
        />
    <Image
        style={{position:'absolute',top:-195,right:44}}
        source={require('./assets/fonts/Home/1แมว.png')}
        />
    <Image
        style={{position:'absolute',top:-25,right:48}}
        source={require('./assets/fonts/Home/1แมวส้ม.png')}
        />
    <Image
        style={{position:'absolute',top:135,right:47}}
        source={require('./assets/fonts/Home/กระต่าย.png')}
        />

    {/* หลังเขียว */}
    <Image
        style={{position:'absolute',top:-104,right:-137}}
        source={require('./assets/fonts/Home/ชื่อ.png')}
        />
    <Image
        style={{position:'absolute',top:65,right:-137}}
        source={require('./assets/fonts/Home/ชื่อ.png')}
        />
    <Image
        style={{position:'absolute',top:225,right:-137}}
        source={require('./assets/fonts/Home/ชื่อ.png')}
        />
    <Image
        style={{position:'absolute',top:-200,right:-150}}
        source={require('./assets/fonts/Home/หลังเขียว.png')}
        />
    <Image
        style={{position:'absolute',top:-30,right:-150}}
        source={require('./assets/fonts/Home/หลังเขียว.png')}
        />
    <Image
        style={{position:'absolute',top:130,right:-150}}
        source={require('./assets/fonts/Home/หลังเขียว.png')}
        />
    <Image
        style={{position:'absolute',top:-195,right:-142}}
        source={require('./assets/fonts/Home/Bulldog.png')}
        />
    <Image
        style={{position:'absolute',top:-25,right:-143}}
        source={require('./assets/fonts/Home/ไหม้.png')}
        />
    <Image
        style={{position:'absolute',top:135,right:-142}}
        source={require('./assets/fonts/Home/หมาขาว.png')}
        />
      {/* Textบน */}
    <TextInput
      style={{position:'absolute',top:-345,right:80}}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="ค้นหา..."
      keyboardType="ascii-capable"
    />
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:90}}>
      สัตว์บก
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-35}}>
      สัตว์น้ำ
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-160}}>
      สัตว์ปีก
    </Text>

        {/* Textชื่อ */}
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-104,right:65}}>
      แมวเทา
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:67,right:65}}>
      แมวส้ม
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:229,right:61}}>
      กระต่าย
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-104,right:-127}}>
      Bulldog
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:70,right:-113}}>
      ไหม้
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:229,right:-128}}>
      หมาขาว
    </Text>

    {/* แถบล่าง */}
    <Image
        style={{position:'absolute',top:275,right:-195}}
        source={require('./assets/fonts/Home/ล่าง.png')}
      />
    <Image
        style={{position:'absolute',top:280,right:-49}}
        source={require('./assets/fonts/Home/เลือก.png')}
        />
    <Image
        style={{position:'absolute',top:275,right:80}}
        source={require('./assets/fonts/Home/โลก.png')}
        />
    <TouchableOpacity
        onPress={() => navigation.navigate('PreRegister')}
        style={{position:'absolute',top:290,right:-170}}>
          <Image source={require('./assets/fonts/Home/1User.png')}/>
        </TouchableOpacity>
    <Image
        style={{position:'absolute',top:269,right:-49}}
        source={require('./assets/fonts/Home/แว่น.png')}
        />
        {/* Textล่าง */}
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:375,right:132}}>
      Find
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:375,right:-30}}>
      Search
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:375,right:-160}}>
      User
    </Text>

    </View>
    </SafeAreaView>
  );
};

const PreRegister = ({navigation}) =>{
  return(
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3'
      }}>
    <View>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-350,right:90}}>
      เข้าสู่ระบบ
    </Text>  
    {/* setting */}
    <Image
        style={{position:'absolute',top:-350,right:-155}}
        source={require('./assets/fonts/PR/เฟือง.png')}
        />
    {/* pic */}
    <Image
        style={{position:'absolute',top:-250,right:-100}}
        source={require('./assets/fonts/PR/กรอบ.png')}
        />
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FF7CA3',fontFamily:'ITIM-REGULAR',position:'absolute',top:-215,right:-65}}>
    น้องๆอยากรู้จัก
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FF7CA3',fontFamily:'ITIM-REGULAR',position:'absolute',top:-185,right:-30}}>
    คุณจัง
    </Text>
    {/* ปุ่มregister */}
    <TouchableOpacity
        onPress={() => navigation.navigate('Register1')}
        style={{position:'absolute',top:80,right:-125}}>
          <Image source={require('./assets/fonts/PR/reg2.png')}/>
        </TouchableOpacity>
    <Image
        style={{position:'absolute',top:-90,right:10}}
        source={require('./assets/fonts/PR/ต่าย.png')}
        />
    <Image
        style={{position:'absolute',top:-90,right:-150}}
        source={require('./assets/fonts/PR/ลิง.png')}
        />
      {/* แถบล่าง */}
    <Image
        style={{position:'absolute',top:275,right:-195}}
        source={require('./assets/fonts/Home/ล่าง.png')}
      />
    <Image
        style={{position:'absolute',top:280,right:-190}}
        source={require('./assets/fonts/Home/เลือก.png')}
        />
    <Image
        style={{position:'absolute',top:275,right:80}}
        source={require('./assets/fonts/Home/โลก.png')}
        />
    <Image
        style={{position:'absolute',top:290,right:-170}}
        source={require('./assets/fonts/Home/1User.png')}
        />
    <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{position:'absolute',top:269,right:-49}}>
        <Image source={require('./assets/fonts/Home/แว่น.png')} />
        </TouchableOpacity>
        {/* Textล่าง */}
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:375,right:132}}>
      Find
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:375,right:-30}}>
      Search
    </Text>
    <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:375,right:-160}}>
      User
    </Text>
      </View>
    </SafeAreaView>
  );
}

const Register1 = ({navigation}) =>{
  const [user, onChangeUser] = React.useState(null);
  [Pass, onChangePass] = React.useState(null);
  [Name, onChangeName] = React.useState(null);
  return(
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3'
      }}>
    <View>
      {/* กลับ */}
    <TouchableOpacity
        onPress={() => navigation.navigate('PreRegister')}
        style={{position:'absolute',top:-350,right:120}}>
        <Image source={require('./assets/fonts/Register/กลับ.png')} />
        </TouchableOpacity>
      {/* reg */}
      <Text style={{fontSize: 30, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-80}}>
      สมัครสมาชิก
    </Text>
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-200,right:50}}>
      user-name*
    </Text>
    <Image
        style={{position:'absolute',top:-170,right:-150}}
        source={require('./assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-162,right:100}}
      onChangeText={onChangeUser}
      value={user}
      keyboardType="ascii-capable"
    />
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-80,right:50}}>
      password*
    </Text>
    <Image
        style={{position:'absolute',top:-50,right:-150}}
        source={require('./assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-42,right:100}}
      onChangeText={onChangePass}
      value={Pass}
      keyboardType="ascii-capable"
    />
        <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:40,right:45}}>
      ชื่อ-นามสกุล*
    </Text>
    <Image
        style={{position:'absolute',top:80,right:-150}}
        source={require('./assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:90,right:100}}
      onChangeText={onChangeName}
      value={Name}
      keyboardType="ascii-capable"
    />
    {/* next */}
    <TouchableOpacity
        onPress={() => navigation.navigate('Register2')}
        style={{position:'absolute',top:190,right:-25}}>
        <Image source={require('./assets/fonts/Register/ศร.png')} />
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const Register2 = ({navigation}) =>{
  const [Mail, onChangeMail] = React.useState(null);
  [Pet, onChangePet] = React.useState(null);
  return(
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3'
      }}>
    <View>
           {/* กลับ */}
    <TouchableOpacity
        onPress={() => navigation.navigate('Register1')}
        style={{position:'absolute',top:-350,right:120}}>
        <Image source={require('./assets/fonts/Register/กลับ.png')} />
        </TouchableOpacity>
      {/* reg */}
      <Text style={{fontSize: 30, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-80}}>
      สมัครสมาชิก
    </Text>
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-200,right:100}}>
      อีเมล
    </Text>
    <Image
        style={{position:'absolute',top:-170,right:-150}}
        source={require('./assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-162,right:100}}
      onChangeText={onChangeMail}
      value={Mail}
      keyboardType="ascii-capable"
    />
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-80,right:-20}}>
      สัตวเลี้ยง (ไม่มีให้ใส่ -)
    </Text>
    <Image
        style={{position:'absolute',top:-50,right:-150}}
        source={require('./assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-42,right:100}}
      onChangeText={onChangePet}
      value={Pet}
      keyboardType="ascii-capable"
    />
    {/* pic */}
    <Image
        style={{position:'absolute',top:30,right:-140}}
        source={require('./assets/fonts/Register/นก.png')}
        />
    {/* CP */}
    <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{position:'absolute',top:350,right:-180}}>
        <Image source={require('./assets/fonts/Register/CP.png')} />
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const Login = ({navigation}) =>{
  const [Username, onChangeUssername] = React.useState(null);
  [Password, onChangePassword] = React.useState(null);
  return(
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0F3'
      }}>
    <View>
            {/* reg */}
            <Text style={{fontSize: 30, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-270,right:-30}}>
      Login
    </Text>
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-200,right:50}}>
      Username
    </Text>
    <Image
        style={{position:'absolute',top:-170,right:-150}}
        source={require('./assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-162,right:100}}
      onChangeText={onChangeUssername}
      value={Username}
      keyboardType="ascii-capable"
    />
    <Text style={{fontSize: 18, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',position:'absolute',top:-80,right:60}}>
      Password
    </Text>
    <Image
        style={{position:'absolute',top:-50,right:-150}}
        source={require('./assets/fonts/Register/ว่าง.png')}
        />
      <TextInput
      style={{position:'absolute',top:-42,right:100}}
      onChangeText={onChangePassword}
      value={Password}
      keyboardType="ascii-capable"
    />
    {/* Login */}
    <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{position:'absolute',top:70,right:-110}}>
        <Image source={require('./assets/fonts/Register/Login.png')} />
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
} 
export default App;