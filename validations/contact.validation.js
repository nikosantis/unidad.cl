import * as yup from 'yup'

export const contactSchema = yup.object().shape({
  firstName: yup.string().required().min(5).max(30),
  lastName: yup.string().required().min(5).max(30),
  email: yup.string().email().required(),
  phone: yup.string().required().min(9).max(9).matches(/^[0-9]{0,9}/gm)
})

export const firstNameSchema = yup.object().shape({
  firstName: yup.string().required().min(5).max(30)
})

export const lastNameSchema = yup.object().shape({
  lastName: yup.string().required().min(5).max(30)
})

export const emailSchema = yup.object().shape({
  email: yup.string().email().required()
})

export const phoneSchema = yup.object().shape({
  phone: yup.string().required().min(9).max(9).matches(/^[0-9]{0,9}/gm)
})
