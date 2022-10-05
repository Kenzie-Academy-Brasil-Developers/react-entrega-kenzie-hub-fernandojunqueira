import React from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import { StyledDivContainerForm } from './style'

const LoginPage = () => {
  return (
    <main>
        <StyledDivContainerForm>
            <h1>Kenzie Hub</h1>
            <Form>
                <h2>Login</h2>
                <label for='email'>Email</label>
                <Input type="text" id='email' placeholder='Digite aqui seu email'/>
                <label for='password' >Senha</label>
                <Input type="text" id='password' placeholder='Digite aqui sua senha'/>
                <Button color={"#ffffff"} background={"#FF577F"}>Entrar</Button>
                <span>Ainda não possui uma conta?</span>
                <Button color={"#F8F9FA"} background={"#868E96"}>Cadastre-se</Button>
            </Form>
        </StyledDivContainerForm>
    </main>
  )
}

export default LoginPage