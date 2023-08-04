const {View, Text, Button, StyleSheet} = require('react-native');
import {useContext, useEffect, useState} from 'react';
import {SessionContext} from '../../contexts/sessionContex';
import {useNavigation} from '@react-navigation/native';
import { Box,Pressable } from 'native-base';
import {PostUsers} from '../../Components/PostUsers';
import {MenuIcon} from '../../Components/MenuIcon';
import {Layout} from '@ui-kitten/components';
import {ContextsSubtription} from '../../contexts/SubcriptionPostsProvider';
import { Icon } from '@ui-kitten/components';
import { NotificationsPost } from '../../Components/ContainerNotifications/NotificationsPost';

const HomeUsersScreen = () => {
  const {logout, user} = useContext(SessionContext);
  const {data, notificationCount} = useContext(ContextsSubtription);
  const {name, role, userId} = user;
  const navigation = useNavigation();
  const [dates, setDate] = useState(false)
  return (
    <Layout style={{flex: 1}}>
      <View style={styles.containerHome}>
        <View style={styles.menuIcon}>
          <MenuIcon navigation={navigation} />
            <Pressable w={10} position={'relative'} onPress={() => setDate(true)}>
              <Icon name="bell-outline" width={48} height={28} fill="" />
              <Text style={{position:'absolute', color:'red'}}>{notificationCount?.CountPost}</Text>
            </Pressable>
          <Box left={-75}>
             {
               dates && (<NotificationsPost data={data} dates={setDate}/>)
             }
          </Box>
        </View>
        <Text style={styles.titleUser}>¡Hello {name}!</Text>
        <View style={styles.containerPost}>
          <PostUsers />
        </View>
        <View style={styles.buttonExit}></View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  titleUser: {
    top: 60,
    fontSize: 25,
  },
  containerHome: {
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#dbd7d7',
    opacity: 0.8,
    backgroundImage: 'linear-gradient(45deg, #c7d9fc 50%, #dbd7d7 50%)',
    backgroundZize: '10px 10px',
    flex: 1
  },

  containerPost: {
    width: '100%',
    top: 100,
    padding: 10,
  },

  menuIcon: {
    paddingHorizontal: 5,
    top: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    zIndex: 5
  },
});

export default HomeUsersScreen;
