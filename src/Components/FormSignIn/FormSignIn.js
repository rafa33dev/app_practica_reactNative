import { Formik } from 'formik';
import { TextInput, View , Button, Text} from 'react-native';
import { styleForm } from './FormSignInStyle';
import { validationSchema } from './ValidationSchema';
import { useContext, useEffect, useState } from 'react';
import { useTokenUser } from '../../Hooks/HooksUsers/useTokenUser';
import { SessionContext } from '../../contexts/sessionContex';
import { useNavigation } from '@react-navigation/native';
import { Groups } from '../../Screens/GroupsScreens';


export const FormSignIn = () => {
  const [dataUser, setDataUser] = useState({});
  const {data, loading, error , loginUser} = useTokenUser(dataUser) 
  const {login} = useContext(SessionContext) 
  const navigation = useNavigation()

  useEffect(()=> {
    if (data) {
      login(JSON.stringify(data))
    }
  },[data])
  
  const tokenUsers = (values) => {
    try {
      loginUser( {
        variables:{
          email: values.email,
          password: values.password
        }
      })
    } catch (error) {
      throw new Error('error de inicion de ssesion')
    }
  }
  
  return( 
    <Formik
    initialValues={{email: '', password:''}}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      tokenUsers(values) 
  }}
 >
    {({ handleChange, handleSubmit, values, errors }) => (
      <View style={{ marginVertical: 15 ,  width:'70%'}}>
        <TextInput
          style={styleForm.input}
          placeholder="Email"
          onChangeText={handleChange('email')}
          value={values.email}
          autoCapitalize='none'
        />
        {errors.email && <Text style={{ color: 'yellow' ,fontSize: 20, letterSpacing: 1 , marginVertical: 5}}>{errors.email}</Text>}

        <TextInput
          style={styleForm.input}
          placeholder="Password"
          onChangeText={handleChange('password')}
          value={values.password}
          secureTextEntry
        />
        {errors.password && <Text style={{ color: 'yellow' ,fontSize: 20, letterSpacing: 1 , marginVertical: 5}}>{errors.password}</Text>}
        <View style={{  marginTop: 20 , height: 150, justifyContent:'space-between'}}>
          <Button title="Sign in" onPress={handleSubmit} />
          <Button title="Sign Up" onPress={() => navigation.navigate(Groups.AuthGroup.signUp.name)} />
        </View>
      </View>
    )}
 </Formik>
  
 )
};
