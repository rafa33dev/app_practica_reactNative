import { FlatList,StyleSheet} from "react-native"
import { useGetPosts } from "../../Hooks/HooksPosts/useGetPosts"
import { arrayPosts } from "../../Utils/arrayPosts/arrayPosts"
import { VStack, Box, Divider } from 'native-base';
import { TypeIcons } from "../TypeIcons";
import {Icon} from '@ui-kitten/components';
import { useState } from "react";


export const PostUsers = () => {
  const {data} = useGetPosts()
  const {userPosts} = arrayPosts(data)
   

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
          <TypeIcons name="message-circle" color="" styles={{}} postId={item.id}/>
          <Icon name="heart" width={30} height={30} fill=""/>
        </Box>
      </VStack>
    </Box>
    );
  };

    
  return(
     <FlatList
     style={styles.containerList}
      data={userPosts}
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