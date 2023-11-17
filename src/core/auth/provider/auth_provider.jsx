import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from "../../base/app_storage";
import axios from "axios";

export const AUTH_KEY = 'isLoggedIn'


export const AuthProvider = ({ children, fallback }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const [ isLoading, setIsLoading ] = useState()

  // const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);
  
  // const getLoginState = async () => AppStorage.get(AUTH_KEY);

  // const removeLoginState = async () => AppStorage.remove(AUTH_KEY);


  // useEffect(() => {
  //   const initAuth = async () => {
  //     try {
        
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   initAuth();
  // }, []);


    const login = async () => {
      //Enviar al backend

      // await axios.post('/login', {email, password});

        setIsLoggedIn(true)
        saveLoginState(true)
      };
      const logout = async () => {
        setIsLoggedIn(false)
        removeLoginState();
    };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
