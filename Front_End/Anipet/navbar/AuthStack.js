/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
// import type {Node} from 'react';
import { Image, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator(bottomNavigatorConfigs);
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
import Home from '../screen/homeScreen';
import Login from '../screen/loginScreen';
import PreRegister from '../screen/preRegisterScreen';
import Register1 from '../screen/register1Screen';
import Map from '../screen/MapScreen';
import Cat from '../screen/catC';
import Edit from '../screen/Edit';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import User from '../screen/userScreen';
import From1 from '../screen/fromScreen';
import PredicS from '../screen/predicScreen';
import { predic } from '../../../backend/controller/predic';


const AuthStack = () => {
    return (
            <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'#FFABC4',
                    height:90,
                },
                tabBarHideOnKeyboard:true,
                }}>
                <Tab.Screen component={HomeStackScreen} name="HomeS" options={{
                    headerShown:false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                        source={require('../assets/fonts/Home/แว่น.png')}
                        />
                    ),
                    }} />
                <Tab.Screen component={Map} name="Map" options={{
                    headerShown:false,
                    tabBarLabel: 'Map', tabBarIcon: ({ color, size }) => (
                        <Image
                        source={require('../assets/fonts/Home/โลก.png')}
                        />)}} />
                <Tab.Screen component={UserStackScreen} name="PreRegister" options={{
                    headerShown:false,
                    tabBarLabel: 'PreRegister', tabBarIcon: ({ color, size }) => (
                        <Image
                        source={require('../assets/fonts/Home/1User.png')}
                        />)}} />
            </Tab.Navigator>
    );
};
function HomeStackScreen(){
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen component={Home} name="Home" options={{headerShown:false}} />
            <UserStack.Screen component={Cat} name="Cat" options={{headerShown:false}} />
            <UserStack.Screen component={From1} name="From" options={{headerShown:false}} />
            <UserStack.Screen component={PredicS} name="Predic" options={{headerShown:false}} />
        </HomeStack.Navigator>
    );
}
function UserStackScreen () {
    const {userToken} = useContext(AuthContext);
    if (userToken !== null){
        return (
            <UserStack.Navigator >
                <UserStack.Screen component={User} name="User" options={{headerShown:false}} />
                <UserStack.Screen component={Edit} name="Edit" options={{headerShown:false}} />
            </UserStack.Navigator>
        );
    }
    return (
        <UserStack.Navigator >
            <UserStack.Screen component={PreRegister} name="PreRegis" options={{headerShown:false}} />
            <UserStack.Screen component={Register1} name="Register1" options={{headerShown:false}} />
            <UserStack.Screen component={Login} name="Login" options={{headerShown:false}} />
        </UserStack.Navigator>
    );
}
export default AuthStack;

const bottomNavigatorConfigs = {
    screenOptions: {
        tabBarStyle: { height: 300 },
    },
};
