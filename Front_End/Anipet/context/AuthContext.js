/* eslint-disable prettier/prettier */
import React, {createContext,useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const AuthContext = createContext();
const URL = 'http://10.0.2.2:3000';

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState([]);
    const search = (name) => {
        setIsLoading(true);
        axios.post(`${URL}/api/search`,{
            name,
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(`Search failed ${err}`);
        });
    };
    const register = (name,username,password,gender) => {
        setIsLoading(true);
        axios.post(`${URL}/api/register`,{
            name,username,password,gender,
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(`Register failed ${err}`);
        });
    };
    const login = (username, password) =>{
        setIsLoading(true);
        axios.post(`${URL}/api/login`,{
            username,password,
        })
        .then(res=>{
            console.log(res.data.token);
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
        <AuthContext.Provider value={{register, login, logout, search, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
};
