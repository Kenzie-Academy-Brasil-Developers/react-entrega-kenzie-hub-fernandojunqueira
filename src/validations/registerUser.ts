import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Deve ser um email válido').required('Email é obrigatório'),
    bio: yup.string().required('Bio é obrigatório'),
    contact: yup.string().required('Contato é obrigatório'),
    course_module: yup.string().required(),
    password: yup
    .string()
    .required('Senha é obrigatório')
    .matches(/[A-Z]/,'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/,'Deve conter ao menos 1 letra minuscula')
    .matches(/(\d)/,'Deve conter ao menos 1 número')
    .matches(/(\W)|_/,'Deve conter ao menos 1 caracter especial')
    .matches(/.{8,}/,'Deve conter no minimo 8 dígitos')
    ,
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Confirmação de senha deve ser igual a senha')

  })