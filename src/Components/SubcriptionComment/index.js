import {Icon} from '@ui-kitten/components';
import {Box, Pressable, Text} from 'native-base';
//import { useNewCommet } from '../../Hooks/HooksComments/SubcriptionComment/useNewComment';
import {useEffect, useState} from 'react';
import {useSubscription} from '@apollo/client';
import {CREATE_NEW_COMMENT_SUBCRIPTION} from '../../Graphql/GqlComments';

export const SubscriptionComment = () => {
  const {data, loading, error} = useSubscription(
    CREATE_NEW_COMMENT_SUBCRIPTION,
    {
      variables: {
        postId: '649b6254966db7135667661f',
      },
    },
  );

  //const {data, loading, error} =  useNewCommet()
  // useEffect(() => {
  //   console.log(data, 'data ---->', loading, 'loading ------>', error, '-----> Error');
  //   if (data) {
  //     const {NewComment} = data;
  //     console.log('mi data', NewComment);
  //   }
  // }, [data, loading, error]);

  return (
    <Box>
      <Pressable w={10} onPress={() => console.log('eliminado')}>
        <Icon name="bell-outline" width={48} height={28} fill="" />
      </Pressable>
      <Box>
        
      </Box>
      <Text>{data?.NewComment.content}</Text>
    </Box>
  );
};
