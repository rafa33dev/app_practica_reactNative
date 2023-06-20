import {Formik} from 'formik'
import { useEffect, useState } from 'react'
import {TextInput, View, Button, Text} from 'react-native'
import { validationSchema } from './ValidationSchema'
import { useNavigation } from '@react-navigation/native'
import { Groups } from '../../Screens/GroupsScreens'
import { useCreateUser } from '../../Hooks/HooksUsers/useCreateUser'
import { Picker } from '@react-native-picker/picker'
//import { useContext } from 'react'

export const FormSignUp = () => {
  const [dataUser, setDataUser] = useState({})
  const roles = ['admin', 'usuario'];
  const {data, loading, error, createUser} = useCreateUser(dataUser)
  const navigation = useNavigation()
  //const { user} = useContext(SessionContext)
  useEffect(() => {
  
    if (data) {
      console.log(data);
    }

  },[data])

  const handleBlur = (fieldName, fieldBlur) => {
    return () => {
      fieldBlur(fieldName);
      // Realizar acciones adicionales aquí, como validaciones o actualizaciones de estado
    };
  };

  const createUsers = () => {
    try {
      createUser()
    } catch (error) {
      throw new Error('error al crear al usuario')
    }
  }


  return(
    <Formik
      initialValues={{name: '', email:'',  website: '' , password: '' , role: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        setDataUser(values)
        createUsers()
        resetForm()
      }}
    >
      {
        ({handleChange, handleSubmit, values, errors , resetForm}) => (
          <View style={{ marginVertical: 15 ,  width:'70%'}}>
            <TextInput 
              placeholder='Name'
              onChangeText={handleChange('name')}
              value={values.name}
            />
           {errors.name && <Text style={{ color: 'yellow' ,fontSize: 20, letterSpacing: 1 , marginVertical: 5}}>{errors.name}</Text>}

            <TextInput 
              placeholder='Email'
              onChangeText={handleChange('email')}
              value={values.email}
            />

           {errors.email && <Text style={{ color: 'yellow' ,fontSize: 20, letterSpacing: 1 , marginVertical: 5}}>{errors.email}</Text>}  

            <TextInput 
              placeholder='Website Opcional!'
              onChangeText={handleChange('website')}
              value={values.website}
            />

            <TextInput 
              placeholder='Password'
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />
              {errors.password && <Text style={{ color: 'yellow' ,fontSize: 20, letterSpacing: 1 , marginVertical: 5}}>{errors.password}</Text>}

            <Picker 
             selectedValue={values.role}
             onValueChange={handleChange('role')}
             onBlur={handleBlur('role', handleBlur)}
            >
             <Picker.Item label='Seleccionar rol' value= ""/>
              
              {roles.map(rol => (<Picker key={rol} label={rol} value={rol}/>))}

            </Picker>
            {errors.role && <Text style={{ color: 'red' }}>{errors.role}</Text>}
            <View style={{  marginTop: 20 , height: 100, justifyContent:'space-between'}}>
               <Button title="Register" onPress={handleSubmit} />
               <Button title="Volver a Sign In " onPress={() => navigation.navigate(Groups.AuthGroup.login.name)} />
            </View>
          </View>
        )
      }

    </Formik>
  )
}
