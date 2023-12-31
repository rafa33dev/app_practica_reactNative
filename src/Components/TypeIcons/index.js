import {Icon} from '@ui-kitten/components';
import {Pressable, View, Modal ,TextInput, Button, Text} from 'react-native';
import {useState} from 'react';
import { CreateComment } from '../CreateComment';
import { ListComment } from '../CreateComment/ListComment';


export const TypeIcons = ({name, color, styles, postId ,countComment , refetch}) => {
  const [modalVisible, setModalVisible] = useState(false);



  const comment = () => {
    setModalVisible(true)
  };

  const closed = () => {
    setModalVisible(false)
  }

  if (countComment) {
    refetch()
  }
  return (
    <View >
      <Pressable style={styles} onPress={comment}>
        <Icon name={name} width={30} height={30} fill={color} />
         
        {countComment ?  (<Text>{countComment}</Text>): null}
      </Pressable>
      <Modal visible={modalVisible} animationType="slide" >

          <ListComment postId={postId} />

        <View style={{ flex: 1, justifyContent: 'flex-end', bottom: 30}}>
          <CreateComment postId   ={postId}/>
          <Button title="Cancelar" onPress={closed}/>
        </View>
      </Modal>
    </View>
  );
};
