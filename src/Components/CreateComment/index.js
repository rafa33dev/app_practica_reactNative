import { Avatar, Button, ScrollView } from "native-base"
import { useContext, useEffect, useState } from "react"
import { TextInput, View , Pressable} from "react-native"
import { SessionContext } from "../../contexts/sessionContex"
import { useCreateComment } from "../../Hooks/HooksComments/useCreateComment"


export const CreateComment = ({postId}) => {
  //console.log('el id del post---> ', postId);
  const [content, setContent] = useState('')
  const { user } = useContext(SessionContext)
  //console.log('--->', user.avatar);
  const {createComment, data, loading, error} = useCreateComment()
  
  // useEffect(() => {
  //   console.log('---> de cracion', data);
  // },[data])

  const Comment = () => {
    try {
      createComment({
        variables: {
         input:{  
          postId: postId,
          content: content,
          author: {
            id: user?.userId,
            name: user?.name,
            avatar: user?.avatar
          }
         }
        }
      })
     // console.log('comentario creado!');
      setContent('')
    } catch (error) {
      throw new Error('Error al crear el comentario', error.message)
    }
  }

  return(
    <View style={{flexDirection: 'row', maxHeight: 100, borderWidth:1,  borderColor: 'gray', alignItems:'center'}}>
      <ScrollView>
        
      <TextInput
        placeholder="Escribe tu comentario"
        multiline={true}
        onChangeText={setContent}
        value={content}
        textAlignVertical="bottom"
        style={{backgroundColor: 'gray' , padding: 10, marginHorizontal: 5 ,borderRadius: 16 ,height: 40, fontSize: 18}}
      /> 
      </ScrollView>
     <Button onPress={Comment} style={{height: 50}}>Comentar</Button>
    </View>
  )
}