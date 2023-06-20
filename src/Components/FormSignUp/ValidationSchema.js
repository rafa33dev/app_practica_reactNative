import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string().email('Ingrese un correo valido').required('El email es requerido!'), 
  website: Yup.string(), 
  password: Yup.string().required('La contraseña es requrida'),
  role: Yup.string().required('Selecciona un rol'),
})