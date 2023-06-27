import { FlatList } from "native-base"
import { useGetCommentPost } from "../../../Hooks/HooksComments/getCommentsPost"
import { Text, View } from "react-native"
import { Box,VStack, Divider } from "native-base"
import { SessionContext } from "../../../contexts/sessionContex"
import { useContext } from "react"

export const ListComment = ({postId}) => {
  const {user} = useContext(SessionContext)

  
  const {data} = useGetCommentPost(postId)
  console.log(data);
  //console.log(data.Post.comments.map(n => n.content)); 
  
  const ListCommentItems = ({item}) => {
      console.log('listo-->',item);
      return (
        <Box border="1" borderRadius="md">
        <VStack space="4" marginBottom={'90'} bgColor={'red.300'} divider={<Divider />}>
          <Box px="4" pt="4">

           {item.author.name}
          </Box>
          <Box px="4">
            {item.content}
          </Box>
        </VStack>
      </Box>
      )
  }

  return(
    <View>
      <FlatList
       data={data?.Post?.comments}
       renderItem={({item}) => < ListCommentItems item={item}/>}
       keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}