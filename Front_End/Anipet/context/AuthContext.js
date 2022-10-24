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
    const [userInfo, setUserInfo] = useState([]);
    const [animalsData, setanimalsData] = useState([]);
    const [ResRegister, setResRegister] = useState(false);
    const [ResLogin, setResLogin] = useState(false);
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
    const register = (name,username,password,pet) => {
        setIsLoading(true);
        axios.post(`${URL}/api/register`,{
            name,username,password,pet,
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
                // eslint-disable-next-line no-shadow
                let userInfo = res.data;
                setUserToken(userInfo.token);
                setUserInfo(userInfo.user);

                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', userInfo.token);

                setResLogin(true);
            }
        })
        .catch(err => {
            console.log(`Login error ${err}`);
        });
        setIsLoading(false);
    };
    const logout = () =>{
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    };

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            // eslint-disable-next-line no-shadow
            let userToken = await AsyncStorage.getItem('userToken');
            // eslint-disable-next-line no-shadow
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);
            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
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
            {register, login, logout, search, edit, setResRegister, setResLogin,
            isLoading, userToken, animalsData, ResRegister, ResLogin, userInfo}
            }>
            {children}
        </AuthContext.Provider>
    );
};
