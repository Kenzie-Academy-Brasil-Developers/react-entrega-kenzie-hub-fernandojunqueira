import React, { useState } from 'react'
import { StyledDivContainerForm, StyledLink } from './style'
import { StyledForm } from '../components/Form/style'
import { StyledInput } from '../components/Input/style'
import { StyledButton } from '../components/Button/styled'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
  email: yup.string().required('Email é obrigatório'),
  password: yup
  .string()
  .required('Senha é obrigatório')
})

const LoginPage = ({ setUser }) => {
  const [loading,setLoading] = useState(false)

  const { register, handleSubmit,formState:{ errors } } = useForm({
    resolver: yupResolver(schema),  
});

  const navigate = useNavigate()

  const registerUser = async (data) => {
  try {
    setLoading(true)
    const response = await api.post('sessions',data)
    setUser({
      user: response.data.user.name,
      module: response.data.user.course_module,
    })
    localStorage.setItem('@KenzieHubToken',response.data.token)
    localStorage.setItem('@KenzieHubId',response.data.user.id)
    toast.success("Login realizado com sucesso!", {
      theme: "dark"
    })

 
    setTimeout(() => {
      navigate('/dashboard')
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
        <StyledDivContainerForm>
            <h1>Kenzie Hub</h1>
            <StyledForm onSubmit={handleSubmit(registerUser)}>
                <h2>Login</h2>

                <label htmlFor='email'>Email</label>
                <StyledInput type="text" id='email' placeholder='Digite aqui seu email' {...register("email")}/>
                <p>{errors.email?.message}</p>

                <label htmlFor='password' >Senha</label>
                <StyledInput type="password" id='password' placeholder='Digite aqui sua senha' {...register("password")}/>
                <p>{errors.password?.message}</p>
                  
                <StyledButton 
                type='submit'
                color={"#ffffff"} 
                background={"#FF577F"}
                disabled={loading}
                >Entrar</StyledButton>

                <span>Ainda não possui uma conta?</span>
                         
                <StyledLink to={'/register'}  color={"#F8F9FA"} background={"#868E96"}>Cadastre-se</StyledLink>
                

            </StyledForm>
        </StyledDivContainerForm>
    </main>
  )
}

export default LoginPage