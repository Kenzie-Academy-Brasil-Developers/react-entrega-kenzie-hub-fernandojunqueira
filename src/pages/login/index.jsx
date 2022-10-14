import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

import { StyledDivContainerForm, StyledLink } from './style'
import { StyledForm } from '../../components/Form/style'
import { StyledInput } from '../../components/Inputs/style'
import { StyledButton } from '../../components/Button/styled'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validations/loginUser'

const LoginPage = () => {

  const { loading , loginUser } = useContext(UserContext)

  const { register, handleSubmit,formState:{ errors } } = useForm({
    resolver: yupResolver(schema),  
});


  return (
    <main>
        <StyledDivContainerForm>
            <h1>Kenzie Hub</h1>
            <StyledForm onSubmit={handleSubmit(loginUser)}>
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