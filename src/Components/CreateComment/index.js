import { Button, ScrollView } from "native-base"
import { useContext, useEffect, useState } from "react"
import { TextInput, View , Pressable} from "react-native"
import { SessionContext } from "../../contexts/sessionContex"
import { useCreateComment } from "../../Hooks/HooksComments/useCreateComment"


export const CreateComment = ({postId}) => {

  const [content, setContent] = useState('')
  const { user } = useContext(SessionContext)

  const {createComment, data, loading, error} = useCreateComment({ postId: postId , content: content, userId: user.userId})
  
  // useEffect(() => {
  //   console.log('--->', data);
  // },[data])

  const Comment = () => {
    try {
      createComment()
      console.log('comentario creado!');
      setContent('')
    } catch (error) {
      throw new Error('Error al crear el comentario')
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