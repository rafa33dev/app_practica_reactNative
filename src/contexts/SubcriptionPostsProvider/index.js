import {Box, Text, Pressable} from 'native-base';
import {useSubscription} from '@apollo/client';
import {Icon} from '@ui-kitten/components';
import {
  CREATE_NEW_POST_SUBCRIPTION,
  CREATE_COUNT_POST_NOTIFICATION
} from '../../Graphql/GqlComments';
import {useEffect, useState, useContext, createContext} from 'react';
import {SessionContext} from '../sessionContex';
import {useGetPosts} from '../../Hooks/HooksPosts/useGetPosts';
import { showNotification } from '../../Components/ContainerNotifications/PushNotifications';

export const ContextsSubtription = createContext();

export const SubscriptionProvider = ({children}) => {
  const [postsIds, setPostsIds] = useState({});
  const {user} = useContext(SessionContext)
  //const {data: dataPost, refetch} = useGetPosts()

  const {data, loading, error} = useSubscription(CREATE_NEW_POST_SUBCRIPTION, {
    variables: {
      userId: user?.userId,
    },
  });
  
  useEffect(() => {
    if (data) {
      const {NewPost} = data;
      showNotification('Nuevo comentario', `Has recibido un comentario en ${NewPost?.author?.name}`);
      console.log('mi posts------->', NewPost.author.name);
    }
  }, [data, error]);

  
  
  //------------------------------------->

  const {data: notificationCount} = useSubscription(CREATE_COUNT_POST_NOTIFICATION)
  //console.log('que monda hay aqui', postsIds);

  
  useEffect(() => {
    if (notificationCount) {
      console.log('mi posts------->', notificationCount);
    }
  }, [notificationCount]);

 
  // const handleOpenContent = () => {
  //   setOpenContent(true);
  // };

  // const handleClosedContent = () => {
  //   setOpenContent(false);
  // };

 

  

  return (
    <ContextsSubtription.Provider value={{data, notificationCount}}>
      {children}
    </ContextsSubtription.Provider>
  );
};
