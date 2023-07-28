import {Box, Text, Pressable} from 'native-base';
import {useSubscription} from '@apollo/client';
import {Icon} from '@ui-kitten/components';
import {
  CREATE_NEW_POST_SUBCRIPTION,
  CREATE_NEW_COMMENT_SUBCRIPTION,
} from '../../Graphql/GqlComments';
import {useEffect,useState, useContext} from 'react';
import {SessionContext} from '../../contexts/sessionContex';
import {useGetPosts} from '../../Hooks/HooksPosts/useGetPosts';
import {arrayPosts} from '../../Utils/arrayPosts/arrayPosts';

export const SubscriptionPosts = ({userPost}) => {
  const {user} = useContext(SessionContext);
  const [openContent, setOpenContent] = useState(false)
  
  // const {data: dataPost, refetch} = useGetPosts()
  // const {userPosts} = arrayPosts(dataPost)

  const {data, loading, error} = useSubscription(CREATE_NEW_POST_SUBCRIPTION, {
    variables: {
      userId: userPost,
    },
  });

  //------------------------------------->

  const {data: dataComment} = useSubscription(CREATE_NEW_COMMENT_SUBCRIPTION, {
    variables: {
      postId: '64c282e3baed803ac07d8a11',
      userId: '648c7a2365dc200e387796b0',
    },
  });

  const handleOpenContent = () => {
    setOpenContent(true);
  };

  const handleClosedContent = () => {
    setOpenContent(false);
  };
  // useEffect(() => {
  //   if (dataComment) {
  //     const {NewComment} = dataComment;
  //     console.log('mi data-------->', NewComment);
  //   }
  // }, [dataComment]);

  // useEffect(() => {
  //   if (data) {
  //     const {NewPost} = data;
  //     console.log('mi posts------->', NewPost);
  //   }
  // }, [data, error]);

  return (
    <Box>
       <Pressable w={10} onPress={handleOpenContent}>
          <Icon name="bell-outline" width={48} height={28} fill="" />
      </Pressable>

      {

      }


      {data?.NewPost?.content ? (
        <Box>
          {data?.NewPost?.author === user.userId ? null : (
            <Text>{data?.NewPost?.content}</Text>
          )}
        </Box>
      ) : (
        <Box>
          <Text>{dataComment?.NewComment?.content}</Text>
        </Box>
      )}
    </Box>
  );
};
