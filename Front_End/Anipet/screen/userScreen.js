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
        </View>
        </SafeAreaView>
      );
    };

export default User;
