/* eslint-disable prettier/prettier */
import React, {createContext,useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import axios from 'axios';
export const AuthContext = createContext();
const URL = 'http://10.0.2.2:3000';

export const AuthProvider = ({children,navigation}) => {
    const createAlert = (status,item) =>
    Alert.alert(
      status,
      item,
      [
        {
          text:'Cancel',
        },
        {
          text:'ok',
        },
      ]
    );
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState([]);
    const [animalsData, setanimalsData] = useState([]);
    const [ResRegister, setResRegister] = useState(false);
    const [ResLogin, setResLogin] = useState(false)
    const edit = (name,gender) => {
        setIsLoading(true);
        axios.post(`${URL}/api/update`,{
            userToken,name,gender,
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    };
    const search = (name) => {
        setIsLoading(true);
        axios.post(`${URL}/api/search`,{
            name,
        })
        .then(res => {
            setanimalsData(res.data);
        })
        .catch(err => {
            console.log(`Search failed ${err}`);
        });
        setIsLoading(false);
    };
    const register = (name,username,password,gender) => {
        setIsLoading(true);
        axios.post(`${URL}/api/register`,{
            name,username,password,gender,
        })
        .then(res => {
            if (res.data.error){
                createAlert('Register Failed',res.data.data);
            }
            else {
                setResRegister(true);
            }
        })
        .catch(err => {
            console.log(`Register failed ${err}`);
        });
        setIsLoading(false);
    };
    const login = (username, password) =>{
        setIsLoading(true);
        axios.post(`${URL}/api/login`,{
            username,password,
        })
        .then(res=>{
            if (res.data.error){
                createAlert('LoginFailed',res.data.data);
            }
            else {
                setResLogin(true);
            }
        })
        .catch(err => {
            console.log(`Login error ${err}`);
        });
        //setUserToken('adslfoFD');
        //AsyncStorage.setItem('userToken', 'adslfoFD');
        setIsLoading(false);
    };
    const logout = () =>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    };

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            // eslint-disable-next-line no-shadow
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        } catch (err){
            console.log(`isLogged in err ${err}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    },[]);
    return (
        <AuthContext.Provider value={
            {register, login, logout, search, edit, setResRegister,
            isLoading, userToken, animalsData, ResRegister}
            }>
            {children}
        </AuthContext.Provider>
    );
};
