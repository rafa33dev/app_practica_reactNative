import * as Yup from 'yup'

export const  validationSchema =  Yup.object().shape({
  title: Yup.string().required('El title es requerido es requerido'),
  content: Yup.string().required('El cotenido es requerido es requerido'),
})