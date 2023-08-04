import {Field, Formik} from 'formik';
import {TextInput, View, Button, Text} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {SessionContext} from '../../contexts/sessionContex';
import {useCreatePost} from '../../Hooks/HooksPosts/useCreatePost';
import {validationSchema} from './ValidationSchema';
import {useNavigation} from '@react-navigation/native';
import {Groups} from '../../Screens/GroupsScreens';

export const CreatePostUser = () => {
  const navigation = useNavigation();
  const {user} = useContext(SessionContext);
  const [isFocused, setIsFocused] = useState(false);
  const {data, createPost, loading, error} = useCreatePost();
  
// console.log('mi uswr', user);
  const createPostUsers = async values => {
    try {
      createPost({
        variables: {
          input: {
            title: values.title,
            content: values.content,
            author: {
              id: user.userId,
              name: user.name,
              avatar: user.avatar,
            },
          },
        },
      });
    } catch (error) {
      throw new Error('error al crear el post');
    }
  };

  const navigateHomeUser = () => {
    setTimeout(() => {
      navigation.navigate(Groups.AccessGroup.homeUserScreen.name);
    }, 2000);
  };

  return (
    <Formik
      initialValues={{authorId: user.userId, title: '', content: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        console.log('aqui', values);
        createPostUsers(values);
        resetForm();
      }}>
      {({handleSubmit, resetForm}) => (
        <View
          style={{
            height: 170,
            maxHeight: 200,
            borderWidth: 1,
            top: 60,
            padding: 15,
            marginHorizontal: 10,
            borderRadius: 10,
            justifyContent: 'space-between',
          }}>
          <View>
            <Button title="atras" onPress={() => navigation.goBack()} />
          </View>
          <Field name="title">
            {({field, meta}) => (
              <View>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: isFocused ? 'blue' : 'gray',
                    borderWidth: 1,
                    paddingLeft: 10,
                  }}
                  placeholder="Title"
                  value={field.value}
                  onChangeText={field.onChange(field.name)}
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
                    paddingLeft: 10,
                  }}
                  placeholder="Description"
                  multiline={true}
                  numberOfLines={4}
                  value={field.value}
                  onChangeText={field.onChange(field.name)}
                />

                {meta.touched && meta.error && <Text>{meta.error}</Text>}
              </View>
            )}
          </Field>
          <Button
            title="Add post!"
            onPress={() => {
              handleSubmit();
              navigateHomeUser();
            }}
          />
        </View>
      )}
    </Formik>
  );
};
