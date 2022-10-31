/* eslint-disable prettier/prettier */
import React, {createContext,useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import axios from 'axios';
export const AuthContext = createContext();
const URL = 'http://10.0.2.2:3000';

export const AuthProvider = ({children}) => {
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
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState([]);
    const [petInfo, setpetInfo] = useState([]);
    const [animalsData, setanimalsData] = useState([]);
    const [predicAnimal, setpredicAnimal] = useState([]);
    const [ResRegister, setResRegister] = useState(false);
    const [ResLogin, setResLogin] = useState(false);
    const [Data, setData] = useState();
    const [favData, setfavData] = useState(true);
    const [getFav, setgetFav] = useState([]);
    const tradeData = (item) => {
        setIsLoading(true);
        console.log(item);
        setData(item);
        setIsLoading(false);
    };
    const info = (name) => {
        setIsLoading(true);
        axios.post(`${URL}/api/info`,{
            name,
        })
        .then(res => {
            setpetInfo(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const getsfavorite = (username) => {
        setIsLoading(true);
        axios.post(`${URL}/api/getsfavorites`,{
            username,
        })
        .then(res => {
            if (res.data.success){
                setgetFav(res.data.data);
            }
            else {
                setfavData(true);
            }
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const checkfavorite = (username,petName,type) => {
        setIsLoading(true);
        axios.post(`${URL}/api/checkfavorite`,{
            username,petName,type,
        })
        .then(res => {
            if (res.data.success){
                setfavData(false);
            }
            else {
                setfavData(true);
            }
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const disfavorite = (username,petName,type) => {
        setIsLoading(true);
        axios.post(`${URL}/api/disfavorite`,{
            username,petName,type,
        })
        .then(res => {
            if (res.data.success){
                setfavData(true);
            }
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const favorite = (username,petName,type) => {
        setIsLoading(true);
        axios.post(`${URL}/api/favorite`,{
            username,petName,type,
        })
        .then(res => {
            if (res.data.success){
                setfavData(false);
            }
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const Delete = () => {
        setIsLoading(true);
        axios.post(`${URL}/api/delete`,{
            userToken,
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const predic = (style,habit) => {
        setIsLoading(true);
        axios.post(`${URL}/api/predic`,{
            userToken,style,habit,
        })
        .then(res => {
            setpredicAnimal(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const edit = (name,pet) => {
        setIsLoading(true);
        axios.put(`${URL}/api/update`,{
            userToken,name,pet,
        })
        .then(res => {
            setUserInfo(res.data);
            AsyncStorage.setItem('userInfo', JSON.stringify(res.data));
        })
        .catch(err => {
            console.log(err);
        });
        setIsLoading(false);
    };
    const search = (min,max,type) => {
        setIsLoading(true);
        axios.post(`${URL}/api/search`,{
            min,max,type,
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
                setUserToken(res.data.token);
                setUserInfo(res.data.user);

                AsyncStorage.setItem('userInfo', JSON.stringify(res.data.user));
                AsyncStorage.setItem('userToken', res.data.token);

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
            let userInfo = await AsyncStorage.getItem('userInfo');
            // eslint-disable-next-line no-shadow
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);
            if (userInfo) {
                setUserInfo(userInfo);
                setUserToken(userToken);
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
            {register, login, logout, search,predic,Delete,favorite,setfavData,checkfavorite,
            edit, setResRegister, setResLogin,tradeData,info,setpetInfo,disfavorite,getsfavorite,
            isLoading, userToken, animalsData, Data,petInfo,getFav,
            ResRegister, ResLogin, userInfo, favData, predicAnimal}
            }>
            {children}
        </AuthContext.Provider>
    );
};
