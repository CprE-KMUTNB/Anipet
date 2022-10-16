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
        <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{position:'absolute',top:-320,right:90}}>
            <Image source={require('../assets/fonts/PR/reg2.png')}/>
            </TouchableOpacity>
        {/* setting */}
        <Image
            style={{position:'absolute',top:-350,right:-155}}
            source={require('../assets/fonts/PR/เฟือง.png')}
            />
        {/* pic */}
        <Image
            style={{position:'absolute',top:-250,right:-100}}
            source={require('../assets/fonts/PR/กรอบ.png')}
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
            <Image source={require('../assets/fonts/PR/reg2.png')}/>
            </TouchableOpacity>
        <Image
            style={{position:'absolute',top:-90,right:10}}
            source={require('../assets/fonts/PR/ต่าย.png')}
            />
        <Image
            style={{position:'absolute',top:-90,right:-150}}
            source={require('../assets/fonts/PR/ลิง.png')}
            />
        {/* แถบล่าง */}
        <Image
            style={{position:'absolute',top:275,right:-195}}
            source={require('../assets/fonts/Home/ล่าง.png')}
        />
        <Image
            style={{position:'absolute',top:280,right:-190}}
            source={require('../assets/fonts/Home/เลือก.png')}
            />
        <Image
            style={{position:'absolute',top:275,right:80}}
            source={require('../assets/fonts/Home/โลก.png')}
            />
        <Image
            style={{position:'absolute',top:290,right:-170}}
            source={require('../assets/fonts/Home/1User.png')}
            />
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{position:'absolute',top:269,right:-49}}>
            <Image source={require('../assets/fonts/Home/แว่น.png')} />
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

export default PreRegister;