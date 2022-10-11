/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   View,
   Text,
   TouchableOpacity,
   Image,
   style,
 } from 'react-native';
 
 // import { NavigationContainer } from '@react-navigation/native';
 // import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 // const Stack = createNativeStackNavigator();
 
 // const App = () => {
 //   <NavigationContainer>
 //     <Stack.Navigator>
 //       <Stack.Screen component={Loading} name='Loading'/>
 //       <Stack.Screen component={Home} name='Home'/>
 //     </Stack.Navigator>
 //   </NavigationContainer>
 // }
 
 const App = () => {
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
     <Text style={{fontSize: 20, fontStyle: 'bold', color: '#DCD6D6',fontFamily:'ITIM-REGULAR',position:'absolute',top:-338,right:60}}>
       ค้นหา....
     </Text>
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
     <Image
         style={{position:'absolute',top:290,right:-170}}
         source={require('./assets/fonts/Home/1User.png')}
         />
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
 
 // const Home = () => {
 //   return (
 //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
 //       <Text style={{fontSize: 20, fontStyle: 'bold', color: '#D70505',fontFamily:'ITIM-REGULAR',textAlign:'center'}}>
 //       Find
 //       </Text>
 //     </View>
 //   );
 // }
 
 export default App;