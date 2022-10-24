import React, { useContext } from 'react'
import { StyledForm } from '../../components/Form/style'
import { StyledInput } from '../../components/Inputs/style'
import { StyledButton } from '../../components/Button/styled'
import { Container, StyledLinkVoltar } from './style'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../validations/registerUser";

import { UserContext } from '../../context/UserContext'

interface iRegister{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    bio: string;
    contact: string;
    course_module: string;
}

const RegisterPage = () => {
    const { loading, registerUser } = useContext(UserContext)

    const { register, handleSubmit,formState:{ errors } } = useForm<iRegister>({
        resolver: yupResolver(schema),  
    });

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
            <select  id="module" {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)" >Primeiro Módulo</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
            </select>
            <p>{errors.course_module?.message}</p>

            <StyledButton type='submit' color={"#ffffff"} background={"#FF577F"} disabled={loading}>{loading ? 'Cadastrando...': 'Cadastre-se'}</StyledButton>
        </StyledForm>
    </Container>
</main>
  )
}

export default RegisterPage