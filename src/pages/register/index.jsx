import React, { useState } from 'react'
import { StyledForm } from '../components/Form/style'
import { StyledInput } from '../components/Input/style'
import { StyledButton } from '../components/Button/styled'
import { Container, StyledLinkVoltar } from './style'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../services/api'
import {  useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';

const schema = yup.object({
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

const RegisterPage = () => {
    const [loading,setLoading] = useState(false)

    const { register, handleSubmit,formState:{ errors } } = useForm({
        resolver: yupResolver(schema),  
    });

    const navigate = useNavigate();

    const  registerUser = async (data) => {
        try {
            setLoading(true)
             await api.post('users',data)

            toast.success("Conta criada com sucesso!", {
                theme: "dark"
              })
            
            setTimeout(() => {
                navigate('/')
            }, 3000)
            

        } catch (error) {

            toast.error(`${error.response.data.message}`, {
                theme: "dark"
              })

        } finally{
            setLoading(false)
        }
    }


  return (
    <main>
    <Container>
        <div>
            <h1>Kenzie Hub</h1>
            <StyledLinkVoltar to={'/'} >Voltar</StyledLinkVoltar>
        </div>
        <StyledForm onSubmit={handleSubmit(registerUser)}>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>

            <label htmlFor='name' >Nome</label>
            <StyledInput type="text" id='name' placeholder='Digite aqui seu nome' {...register("name")}/>
            <p>{errors.name?.message}</p>

            <label htmlFor='email'>Email</label>
            <StyledInput type="text" id='email' placeholder='Digite aqui seu email' {...register("email")}/>
            <p>{errors.email?.message}</p>

            <label htmlFor='password'>Senha</label>
            <StyledInput type="password" id='password' placeholder='Digite aqui seu senha' {...register("password")}/>
            <p>{errors.password?.message}</p>

            <label htmlFor='confirm-password' >Confirmar Senha</label>
            <StyledInput type="password" id='confirm-password' placeholder='Digite novamente sua senha' {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>


            <label htmlFor='bio' >Bio</label>
            <StyledInput type="text" id='bio' placeholder='Fale sobre você' {...register("bio")}/>
            <p>{errors.bio?.message}</p>

            <label htmlFor='contact' >Contato</label>
            <StyledInput type="text" id='contact' placeholder='Opção de contato' {...register("contact")}/>
            <p>{errors.contact?.message}</p>

            <label htmlFor='module' >Selecionar módulo</label>
            <select name="modules" id="module" {...register("course_module")}>
                <option value="Primeiro modulo" >Primeiro Módulo</option>
                <option value="Segundo modulo">Segundo Módulo</option>
                <option value="Terceiro modulo">Terceiro Módulo</option>
            </select>
            <p>{errors.course_module?.message}</p>

            <StyledButton type='submit' color={"#ffffff"} background={"#FF577F"} disabled={loading}>{loading ? 'Cadastrando...': 'Cadastre-se'}</StyledButton>
        </StyledForm>
    </Container>
</main>
  )
}

export default RegisterPage