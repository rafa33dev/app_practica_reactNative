import { Text, View } from "react-native"
import { useContext } from "react"
import { SessionContext } from "../../contexts/sessionContex"
import { Avatar, HStack } from "native-base";
import { CreatePostUser } from "../CreatePost";

export const ProfileUser = () => {
  const {user} = useContext(SessionContext)
  return(
    <View>
    <HStack justifyContent='center' alignItems='center' paddingTop={10} flexDirection='column'>
      <Avatar bg='green.500' h={100} w={100}  source={{
        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }}>
        user1
      </Avatar>
      <Text style={{top: 20, fontSize:16 , fontWeight:'bold'}}>{user.name}</Text>

    </HStack>
      <View>
        <CreatePostUser/>
      </View>
    </View>
  )
}