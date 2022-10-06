import React from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Input from '../components/Input'
import { Container } from './style'

const RegisterPage = () => {
  return (
    <main>
    <Container>
        <div>
            <h1>Kenzie Hub</h1>
            <button>Voltar</button>
        </div>
        <Form>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>
            <label for='name'>Nome</label>
            <Input type="text" id='name' placeholder='Digite aqui seu nome'/>
            <label for='email'>Email</label>
            <Input type="text" id='email' placeholder='Digite aqui seu email'/>
            <label for='password'>Senha</label>
            <Input type="text" id='password' placeholder='Digite aqui seu senha'/>
            <label for='confirmPassword' >Confirmar Senha</label>
            <Input type="text" id='confirmPassword' placeholder='Digite novamente sua senha'/>
            <label for='bio' >Bio</label>
            <Input type="text" id='bio' placeholder='Fale sobre você'/>
            <label for='contact' >Contato</label>
            <Input type="text" id='contact' placeholder='Opção de contato'/>
            <label for='module' >Selecionar módulo</label>
            <select name="modules" id="module">
                <option value="primeiro modulo" >Primeiro Módulo</option>
                <option value="segundo modulo">Segundo Módulo</option>
                <option value="terceiro modulo">Terceiro Módulo</option>
            </select>
            <Button color={"#ffffff"} background={"#FF577F"}>Cadastrar</Button>
        </Form>
    </Container>
</main>
  )
}

export default RegisterPage