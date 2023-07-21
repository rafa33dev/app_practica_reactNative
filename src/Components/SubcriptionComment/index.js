import {Icon} from '@ui-kitten/components';
import {Box, Pressable, Text} from 'native-base';
//import { useNewCommet } from '../../Hooks/HooksComments/SubcriptionComment/useNewComment';
import {useEffect, useState} from 'react';
import {useSubscription} from '@apollo/client';
import {
  CREATE_NEW_COMMENT_SUBCRIPTION,
  CREATE_NEW_POST_SUBCRIPTION,
} from '../../Graphql/GqlComments';

export const SubscriptionComment = () => {
  const {data, loading, error} = useSubscription(
    CREATE_NEW_COMMENT_SUBCRIPTION,
    {
      variables: {
        postId: '649b6254966db7135667661f',
      },
    },
  );

  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
  } = useSubscription(CREATE_NEW_POST_SUBCRIPTION, {
    variables: {
      userId: '6494abfb69cca387ec9f8fc1',
    },
  });

  //const {data, loading, error} =  useNewCommet()
  useEffect(() => {
   
    if (dataPost) {
      const {NewPost} = dataPost;
      console.log('mi data', NewPost);
    }
  }, [dataPost, loadingPost, errorPost]);

  return (
    <Box>
     
        <Box>
          <Pressable w={10} onPress={() => console.log('eliminado')}>
            <Icon name="bell-outline" width={48} height={28} fill="" />
          </Pressable>
          <Text>{data?.NewComment.content}</Text>
        </Box>
     
        <Box>
          <Pressable w={10} onPress={() => console.log('eliminado')}>
            <Icon name="bell-outline" width={48} height={28} fill="" />
          </Pressable>
          <Text>{dataPost?.NewPost.content}</Text>
        </Box>
      
    </Box>
  );
};
