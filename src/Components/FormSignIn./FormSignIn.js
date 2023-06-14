import { Formik } from 'formik';
import { TextInput, View , Button, Text} from 'react-native';
import { styleForm } from './FormSignInStyle';
import { validationSchema } from './ValidationSchema';
import { useContext, useEffect, useState } from 'react';
import { useTokenUser } from '../../Hooks/useTokenUser';
import { SessionContext } from '../../contexts/sessionContex';
const handleREset = (resetForm) => {
 resetForm()
}

export const FormSignIn = () => {
  const [dataUser, setDataUser] = useState({});
  const {data, loading, error , loginUser} = useTokenUser(dataUser) 
  const {login, logout} = useContext(SessionContext) 

  useEffect(()=> {
    if (data) {
      login(JSON.stringify(data))
    }
  },[data])
  
  const tokenUsers = () => {
    try {
      loginUser()
    } catch (error) {
      throw new Error('error de inicion de ssesion')
    }
  }
  
  
  return( 
    
    <Formik
    initialValues={{email: '', password:''}}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      setDataUser(values)
      tokenUsers() 
  }}
 >
{({ handleChange, handleSubmit, values, errors ,resetForm }) => (
      <View style={{ marginVertical: 15 ,  width:'70%'}}>
        <TextInput
          style={styleForm.input}
          placeholder="Correo electrónico"
          onChangeText={handleChange('email')}
          value={values.email}
        />
        {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

        <TextInput
          style={styleForm.input}
          placeholder="Contraseña"
          onChangeText={handleChange('password')}
          value={values.password}
          secureTextEntry
        />
        {errors.password && <Text style={{ color: 'red' ,fontSize: 20, letterSpacing: 1 }}>{errors.password}</Text>}

        <Button title="Enviar" onPress={handleSubmit} />
        <Button title="limpiar" onPress={() => handleREset(resetForm)} />
      </View>
    )}

 </Formik>
  
 )
};
