import {Icon} from '@ui-kitten/components';
import {Box, Pressable, Text} from 'native-base';
import {useEffect, useState,useContext} from 'react';
import {useSubscription} from '@apollo/client';
import {CREATE_NEW_COMMENT_SUBCRIPTION} from '../../Graphql/GqlComments';
import {SessionContext} from '../../contexts/sessionContex';
import { StyleSheet } from 'react-native';

export const SubscriptionComment = ({postId}) => {
  const {user} = useContext(SessionContext);
  const [openContent, setOpenContent] = useState(false)
  const [notificationsCount ,setNotificationsCount] = useState(0)

  const {data, loading, error} = useSubscription(
    CREATE_NEW_COMMENT_SUBCRIPTION,
    {
      variables: {
        postId:"64c27dadbaed803ac07d89dc"
      },
    },
  );

  const handleOpenContent = () => {
    setOpenContent(true)
  }

  const handleClosedContent = () => {
    setOpenContent(false)
  }
  useEffect(() => {
    if (data) {
      const {NewComment} = data;
      console.log('mi data-------->', NewComment);  
    }
  }, [data, loading, error]);

  return (
    <Box style={styles.container}>
      <Box>
        <Pressable w={10} onPress={handleOpenContent}>
          <Icon name="bell-outline" width={48} height={28} fill="" />
        </Pressable>
        <Text>
           
          <Text>{notificationsCount}</Text>
        </Text>
      </Box>
            <Text>{ data?.NewComment?.content}</Text>
    </Box>
  );
};


const styles = StyleSheet.create({
  container: {
    borderWidth:2
  }
})