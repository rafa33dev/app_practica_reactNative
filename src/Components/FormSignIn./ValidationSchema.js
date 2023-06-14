import * as Yup from 'yup'

export const  validationSchema =  Yup.object().shape({
  email: Yup.string().email('Ingrese un correo Valido'),
  password: Yup.string().required('La contraseña es requerida')
})