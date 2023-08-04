import {Formik} from 'formik'
import { useEffect, useState } from 'react'
import {TextInput, View, Button, Text} from 'react-native'
import { validationSchema } from './ValidationSchema'
import { useNavigation } from '@react-navigation/native'
import { Groups } from '../../Screens/GroupsScreens'
import { useCreateUser } from '../../Hooks/HooksUsers/useCreateUser'
import { Picker } from '@react-native-picker/picker'

export const FormSignUp = () => {
  const roles = ['admin', 'usuario'];
  const {data, loading, error, createUser} = useCreateUser()
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

  const createUsers = async (values) => {
    try {
      await createUser({
        variables: {
        input: {  
          name:values.name,
          role:values.role,
          email: values.email,
          avatar: "https://st.depositphotos.com/6408672/52772/i/600/depositphotos_527728480-stock-photo-twisted-colored-drops-close-up.jpg",
          website: values.website,
          password : values.password
        }
      }
      })
      console.log("Usuario creado correctamente");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      throw new Error('error al crear al usuario')
    }
  }

  return(
    <Formik
      initialValues={{name: '', email:'', avatar: "",  website: '' , password: '' , role: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        createUsers(values)
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
