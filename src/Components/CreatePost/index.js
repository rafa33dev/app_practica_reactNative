import {Field, Formik} from 'formik';
import {TextInput, View, Button, Text} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {SessionContext} from '../../contexts/sessionContex';
import {useCreatePost} from '../../Hooks/HooksPosts/useCreatePost';
import {validationSchema} from './ValidationSchema';

export const CreatePostUser = () => {
  const {user} = useContext(SessionContext);
  const [dataUser, setDataUser] = useState({})
  const [isFocused, setIsFocused] = useState(false);
  const {data, createPost, loading, error} = useCreatePost(dataUser)

  const createPostUsers = () => {
    try {
      createPost()
    } catch (error) {
      throw new Error('error al crear al usuario')
    }
  }
  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  // useEffect(() => {
  //   console.log('--->>', loading);
  // },[loading])

  return (
    <Formik
      initialValues={{authorId: user.userId, title: '', content: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        setDataUser(values)
        console.log(values);
        createPostUsers()
        resetForm()
      }}>  
      {({handleSubmit, resetForm}) => (
        <View style={{ height: 170 ,maxHeight: 200 ,borderWidth:1, top: 60, padding: 15, marginHorizontal: 10, borderRadius: 10, justifyContent:'space-between'}}>
          <Field name="title">
            {({field, meta}) => (
              <View>
                <TextInput
                 style={{
                  height: 40,
                  borderColor: isFocused ? 'blue' : 'gray',
                  borderWidth: 1,
                  paddingLeft: 10
                   
                  }}
                  placeholder="Title"
                  value={field.value}
                  onChangeText={field.onChange(field.name)}
                 
                  // onFocus={() => {
                  //  field.onFocus(field.name)
                  //   setIsFocused(true)
                  // }}
                 
                />

                {meta.touched && meta.error && <Text>{meta.error}</Text>}
              </View>
            )}
          </Field>

          <Field name="content">
            {({field, meta}) => (
              <View>
                <TextInput
                   style={{
                    height: 40,
                    borderColor: isFocused ? 'blue' : 'gray',
                    borderWidth: 1, 
                    paddingLeft: 10
                    }}
                  placeholder="Description"
                  multiline={true}
                  numberOfLines={4}
                  value={field.value}
                  onChangeText={field.onChange(field.name)}
                  
                  // onFocus={() => {
                  //   console.log(field);
                  //  field.onFocus(field.name)
                  //   setIsFocused(true)
                  // }}
                />

                {meta.touched && meta.error && <Text>{meta.error}</Text>}
              </View>
            )}
          </Field>
          <Button title="Add post!" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
