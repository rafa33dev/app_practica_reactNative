import React, { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const SessionContext = createContext()

export const SessionContextProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=> {
    const checkAuthentication = async () => {
      const token =  await AsyncStorage.getItem('token')

      if (token) {
        
        try {
          const decodedToken = jwtDecode(token)
          const currentTime = Date.now() / 1000
    
           // Verifica si el token ha expirado
    
           if (decodedToken.exp < currentTime) {
          // El token ha expirado, se debe cerrar sesión
            await AsyncStorage.removeItem('token')
            setUser(null)
           }else {
            setUser(decodedToken)
           }
           // El token es válido, el usuario está autenticado
        } catch (error) {
          console.log('Error al decodificar el token', error);
        }
      }

      setIsLoading(false)
    }

    checkAuthentication()
  },[])

 const login = async (token) => {
  console.log('qui viene el token --->', token);
  try {
    // Lógica de autenticación en el servidor
    await AsyncStorage.setItem('token', token)
    const decodedToken = jwtDecode(token)
    setUser(decodedToken)
  } catch (error) {
    console.log('Error de autenticacion', error);
  }
 // setUserSession(true) 
 }

// Función para cerrar sesión
 const logout = async () => {
  try {
    // Elimina el token almacenado
    await AsyncStorage.removeItem('token')
    setUser(null)
      console.log('se removio el token')
  } catch (error) {
    console.log('Error al remover el token', error);
  }
 }

 return (
   <SessionContext.Provider
    value={
      {
        user,
        isLoading,
        login,
        logout,
      }
    }
   
   >
    {children}
   </SessionContext.Provider>
 )

}
