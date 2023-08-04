import {FlatList, StyleSheet} from 'react-native';
import {useGetPosts} from '../../Hooks/HooksPosts/useGetPosts';
import {arrayPosts} from '../../Utils/arrayPosts/arrayPosts';
import {VStack, Box, Divider, Text, Pressable, Avatar} from 'native-base';
import {TypeIcons} from '../TypeIcons';
import {Icon} from '@ui-kitten/components';
import {useEffect, useState, useContext} from 'react';
import {SubscriptionComment} from '../SubcriptionComment';
import { SessionContext } from '../../contexts/sessionContex';

export const PostUsers = () => {
  const {data, refetch} = useGetPosts();
  const newData = data?.GetPosts.slice()
  const [like, setLike] = useState(0);

  if (newData?.length > 0) {
    newData.sort((a, b) => b.createdAt - a.createdAt);
  }

  useEffect(() => {
    refetch()
  },[])
 
  const renderItem = ({item}) => {
  // console.log('que paso', item);
   refetch()
    return (
      <Box overflowY={'hidden'}>
        <VStack
          borderRadius={'lg'}
          space="1"
          marginBottom={60}
          
          divider={<Divider />}>
          <Box p="4" backgroundColor={'gray.400'} flexDirection={'row'} alignItems={'center'}>
            <Avatar
              h={50}
              w={50}
              source={{
                uri: item?.author?.avatar,
              }}>
              user1
            </Avatar>
            <Text ml={4} color={'gray.900'} fontWeight={'500'} fontSize={17}>{item.author.name}</Text>
          </Box>
          <Box p="4" maxHeight={300} bgColor={'white'}>
            <Text fontSize={16}  color={'gray.500'}>{item.content}</Text>
          </Box>
          <Box px="4" pb="4" flexDirection="row" justifyContent="flex-end">
            <TypeIcons
              name="message-circle"
              countComment={item.commentCount}
              color=""
              styles={{}}
              refetch={refetch}
              postId={item.id}
            />
            <Pressable
              onPress={() => {
                setLike(like + 1);
              }}>
              <Icon name="heart" width={30} height={30} fill="" />
              <Text
                style={{
                  position: 'absolute',
                  right: -5,
                  color: 'white',
                  fontSize: 18,
                }}>
                {like}
              </Text>
            </Pressable>
          </Box>
        </VStack>
      </Box>
    );
  };

  return (
    <FlatList
      style={styles.containerList}
      data={newData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  containerList: {
    width: '100%',
    marginBottom: 150,
    padding: 5
  },

  items: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    height: 100,
  },

  contenPost: {
    color: 'white',
  },

  logo: {
    width: 20,
    height: 20,
    backgroundColor: 'steelblue',
    borderRadius: 100,
  },
});
