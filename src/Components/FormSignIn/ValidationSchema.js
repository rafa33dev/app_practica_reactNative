import * as Yup from 'yup'

export const  validationSchema =  Yup.object().shape({
  email: Yup.string().email('Ingrese un correo Valido'),
  email: Yup.string().required('El correo es requerido'),
  password: Yup.string().required('La contraseña es requerida')
})