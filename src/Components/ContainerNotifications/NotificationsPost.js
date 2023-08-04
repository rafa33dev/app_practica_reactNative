import {VStack, Box, Divider, Pressable, Text, Avatar} from 'native-base';
import {FlatList} from 'react-native';

export const NotificationsPost = ({data, dates}) => {
  const newData = [data];
  const renderItems = ({item}) => {
    console.log('que pasoiiiii', item);
    return (
      <Box borderColor={'red.500'} height={250}>
        <VStack
          space="2"
          padding={5}
          backgroundColor="#e5e5f7"
          opacity="1"
          backgroundImage="linear-gradient(to right, #dbdcee, #dbdcee 3px, #e5e5f7 3px, #e5e5f7 )"
          backgroundSize="6px 100%"
          divider={<Divider />}
          borderRadius={'md'}>
          <Pressable onPress={() => dates(false)}>
            <Text>salir</Text>
          </Pressable>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-around'}>
            <Avatar
              bg="green.500"
              h={30}
              w={30}
              source={{
                uri: item?.NewPost?.author?.avatar,
              }}>
              user1
            </Avatar>
            <Text marginLeft={3}>{item?.NewPost.author?.name}</Text>
          </Box>
          <Box px="2">
            <Text>{item?.NewPost?.content}</Text>
          </Box>
        </VStack>
      </Box>
    );
  };

  return (
    <FlatList
      data={newData}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}></FlatList>
  );
};
