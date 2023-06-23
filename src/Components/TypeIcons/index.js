import {Icon} from '@ui-kitten/components';
import {Pressable, View, Modal ,TextInput, Button} from 'react-native';
import {useState} from 'react';
import { CreateComment } from '../CreateComment';

export const TypeIcons = ({name, color, styles, postId}) => {
  const [showComment, setShowComment] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const comment = () => {
    //setShowComment(!showComment);
    setModalVisible(true)
  };

  const closed = () => {
    setModalVisible(false)
  }
  return (
    <View >
      <Pressable style={styles} onPress={comment}>
        <Icon name={name} width={30} height={30} fill={color} />
      </Pressable>
      <Modal visible={modalVisible} animationType="slide" >
        <View style={{ flex: 1, justifyContent: 'flex-end', bottom: 30}}>
          <CreateComment postId={postId}/>
          <Button title="Cancelar" onPress={closed}/>
        </View>
      </Modal>
    </View>
  );
};
