/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
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
  KeyboardAvoidingView,
} from 'react-native';
import { AuthContext } from '../context/AuthContext';

const Home = ({navigation}) => {
    const [name, SetName] = useState(null);
    const {search} = useContext(AuthContext);
    return (
        <KeyboardAvoidingView style = {styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFE0F3',
                }}>
                <View>
                {/* search */}
                <Image
                    style={{position:'absolute',top:-260,right:-119}}
                    source={require('../assets/fonts/Home/หา.png')}
                    />
                {/* หมวดหมู่ */}
                {/* หลังม่วง */}
                <Image
                    style={{position:'absolute',top:-54,right:83}}
                    source={require('../assets/fonts/Home/ชื่อ.png')}
                    />
                <Image
                    style={{position:'absolute',top:115,right:83}}
                    source={require('../assets/fonts/Home/ชื่อ.png')}
                    />
                <Image
                    style={{position:'absolute',top:-150,right:70}}
                    source={require('../assets/fonts/Home/หลัง.png')}
                    />
                <Image
                    style={{position:'absolute',top:20,right:70}}
                    source={require('../assets/fonts/Home/หลัง.png')}
                    />
                <Image
                    style={{position:'absolute',top:-145,right:74}}
                    source={require('../assets/fonts/Home/1แมว.png')}
                    />
                <Image
                    style={{position:'absolute',top:25,right:78}}
                    source={require('../assets/fonts/Home/1แมวส้ม.png')}
                    />

                {/* หลังเขียว */}
                <Image
                    style={{position:'absolute',top:-54,right:-107}}
                    source={require('../assets/fonts/Home/ชื่อ.png')}
                    />
                <Image
                    style={{position:'absolute',top:115,right:-107}}
                    source={require('../assets/fonts/Home/ชื่อ.png')}
                    />
                <Image
                    style={{position:'absolute',top:-150,right:-120}}
                    source={require('../assets/fonts/Home/หลังเขียว.png')}
                    />
                <Image
                    style={{position:'absolute',top:20,right:-120}}
                    source={require('../assets/fonts/Home/หลังเขียว.png')}
                    />
                <Image
                    style={{position:'absolute',top:-145,right:-112}}
                    source={require('../assets/fonts/Home/Bulldog.png')}
                    />
                <Image
                    style={{position:'absolute',top:25,right:-113}}
                    source={require('../assets/fonts/Home/ไหม้.png')}
                    />
                    {/* Textบน */}
                <TextInput
                    style={{position:'absolute',top:-255,right:100}}
                    onChangeText={SetName}
                    value={name}
                    placeholder="ค้นหา..."
                    keyboardType="ascii-capable"
                />
                <View style={{top:-200}}>
                    <Button
                        title="Search"
                        onPress={() => {search(name);}}
                    />
                </View>

                    {/* Textชื่อ */}
                <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-54,right:95}}>
                    แมวเทา
                </Text>
                <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:117,right:95}}>
                    แมวส้ม
                </Text>
                <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-54,right:-97}}>
                    Bulldog
                </Text>
                <Text style={{fontSize: 20, fontStyle: 'bold', color: '#FBF6F6',fontFamily:'ITIM-REGULAR',position:'absolute',top:120,right:-83}}>
                    ไหม้
                </Text>

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});
