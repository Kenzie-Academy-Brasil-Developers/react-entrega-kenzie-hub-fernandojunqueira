import * as yup from "yup";

export const schema = yup.object({
    title: yup.string().required('Nome é obrigatório'),
    status: yup
    .string()
    .required('Status é obrigatório')
  })