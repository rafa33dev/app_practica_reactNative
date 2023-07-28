import { Text, View } from "react-native"
import { useContext } from "react"
import { SessionContext } from "../../contexts/sessionContex"
import { Avatar, HStack } from "native-base";
import { CreatePostUser } from "../CreatePost";

export const ProfileUser = () => {
  const {user} = useContext(SessionContext)
  console.log('mi user',user);
  return(
    <View>
    <HStack justifyContent='center' alignItems='center' paddingTop={10} flexDirection='column'>
      <Avatar bg='green.500' h={100} w={100}  source={{
        uri: user.avatar
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