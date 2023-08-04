import {FlatList, Avatar} from 'native-base';
import {useGetCommentPost} from '../../../Hooks/HooksComments/getCommentsPost';
import {Text, View} from 'react-native';
import {Box, VStack, Divider, Pressable} from 'native-base';
import {Icon} from '@ui-kitten/components';
import {SessionContext} from '../../../contexts/sessionContex';
import {useContext, useState, useEffect} from 'react';

export const ListComment = ({postId}) => {
  const {data, refetch} = useGetCommentPost(postId);
  const [like, setLike] = useState(0);

  useEffect(() => {
    refetch();
    console.log('se refresco');
  }, []);
  const ListCommentItems = ({item}) => {
    return (
      <Box  my={7}>
        <VStack space={1}  >
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            p="4">
            <Avatar
              bg="green.500"
              h={50}
              w={50}
              source={{
                uri: item.author.avatar,
              }}>
              user1
            </Avatar>
            <Text>{item?.author?.name}</Text>
          </Box>
          
          <Box
            borderRadius={'xl'}
            borderWidth={1}
            h={100}
            justifyContent={'space-between'}
            overflowY={'hidden'}
            p={4}>
            <Text>{item.content}</Text>

            <Box flexDirection={'row'} justifyContent={'flex-end'}>
              <Pressable w={10} onPress={() => setLike(() => like + 1)}>
                <Icon name="heart" width={30} height={30} fill="" />
                <Text
                  style={{
                    position: 'absolute',
                    right: -5,
                    color: 'black',
                    fontSize: 18,
                  }}>
                  {like}
                </Text>
              </Pressable>
              <Pressable w={10} onPress={() => console.log('eliminado')}>
                <Icon name="trash-2-outline" width={48} height={28} fill="" />
              </Pressable>
              <Text></Text>
            </Box>
          </Box>
        </VStack>
      </Box>
    );
  };

  return (
    <View>
      <FlatList
        style={{height: 600, top: 50, padding: 10}}
        data={data?.GetPostComments}
        renderItem={({item}) => <ListCommentItems item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
