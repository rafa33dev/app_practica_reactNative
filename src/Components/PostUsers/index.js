import { FlatList,StyleSheet} from "react-native"
import { useGetPosts } from "../../Hooks/HooksPosts/useGetPosts"
import { arrayPosts } from "../../Utils/arrayPosts/arrayPosts"
import { VStack, Box, Divider, Text, Pressable } from 'native-base';
import { TypeIcons } from "../TypeIcons";
import {Icon} from '@ui-kitten/components';
import { useState } from "react";


export const PostUsers = () => {
  const {data} = useGetPosts()
  const {userPosts} = arrayPosts(data)
  const [like, setLike] = useState(0)
 
  const renderItem = ({ item }) => {
    return (
      <Box border="1" borderRadius="md">
      <VStack space="4" marginBottom={'90'} bgColor={'red.300'} divider={<Divider />}>
        <Box px="4" pt="4">
         {item.name}
        </Box>
        <Box px="4">
          {item.content}
        </Box>
        <Box px="4" pb="4" flexDirection='row'justifyContent='flex-end'>
          <TypeIcons name="message-circle" countComment={item.commentCount} color="" styles={{}} postId={item.id}/>
          <Pressable  onPress={() => setLike(like + 1)}>
            <Icon name="heart" width={30} height={30} fill=""/>
            <Text style={{position: 'absolute', right: -5 , color: 'white' , fontSize: 18}}>{like}</Text>
          </Pressable>
          
        </Box>
      </VStack>
    </Box>
    );
  };

    
  return(
     <FlatList
     style={styles.containerList}
      data={userPosts.reverse()}
      renderItem={renderItem}
      keyExtractor={(item,index) => index.toString()}
     />
  )
}

const styles = StyleSheet.create({
  containerList: {
    width: '100%',
  },

  items: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15

  },

  name:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    height: 100
  },

  contenPost: {
    color: 'white'
  },

  logo: {
    width: 20,
    height: 20,
    backgroundColor: 'steelblue',
    borderRadius: 100
  }

})