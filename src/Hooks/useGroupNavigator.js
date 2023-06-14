import {createNativeStackNavigator} from '@react-navigation/native-stack'
//import {useContext, useEffect} from 'react'

export const useGroupNavigator = () => {
 const Stack = createNativeStackNavigator()
 

 const groupsNavigator = (Stack, Groups) => {
  return Object.keys(Groups).map((nameScreens, nameScreensIndex) => {
    return <Stack.Screen
      key={nameScreensIndex}
      name={Groups[nameScreens].name}
      component={Groups[nameScreens].component} 
    />
  })
 }
 return {
  groupsNavigator,
  Stack
 }
}
