import React, { useContext } from 'react'
import { SessionContext } from './contexts/sessionContex'
import { Groups } from './Screens/GroupsScreens'
import { Button, Text, View } from 'react-native'
import { useGroupNavigator } from './Hooks/useGroupNavigator'

export const GroupsNavigator = () => {
  const { groupsNavigator, Stack} = useGroupNavigator()
  const { user, isLoading, login , logout} = useContext(SessionContext) 



  if (isLoading) return
  return( 
  <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      {
        !user && <Stack.Group>
          {groupsNavigator(Stack, Groups.AuthGroup)}
        </Stack.Group>
      }
      {
        user && <Stack.Group>
          {groupsNavigator(Stack, Groups.AccessGroup)}
        </Stack.Group>
      }
    </Stack.Navigator>
  )
  
}