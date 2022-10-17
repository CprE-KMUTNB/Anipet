/* eslint-disable prettier/prettier */
import React, {createContext,useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = () =>{
        setUserToken('adslfoFD');
        setIsLoading(false);
        console.log(userToken)
    };
    const logout = () =>{
        setUserToken(null);
        setIsLoading(false);
    };
    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
};