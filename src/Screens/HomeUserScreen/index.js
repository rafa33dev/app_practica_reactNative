const { View, Text, Button } = require("react-native")
import { useContext, useEffect } from "react"
import { SessionContext } from "../../contexts/sessionContex"
import { useNavigation } from "@react-navigation/native"
import { Groups } from "../GroupsScreens"
const HomeUsersScreen = () => {
  const navigation = useNavigation()
  const {logout , user} = useContext(SessionContext)
   
 
   
  return(
    <View>
      <Text>home User</Text>
      <Button 
       title="salir"
       onPress={() =>{logout()}}
      />
    </View>
  )
}

export default HomeUsersScreen
