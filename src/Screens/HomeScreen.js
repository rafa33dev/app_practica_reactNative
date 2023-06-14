import {View, Text, FlatList, Button} from 'react-native';
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Groups } from './GroupsScreens';
function HomeScreen() {
  const navigation = useNavigation()
   
  const goSigIn = () => {
    navigation.navigate(Groups.AuthGroup.login.name)
  }

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'gray',
        justifyContent: 'flex-end',
      }}>
      <View style={{marginBottom: 30, paddingHorizontal: 20}}>
        <Button title="Home" onPress={() => goSigIn()} />
      </View>
    </View>
  );
}

export default HomeScreen;
