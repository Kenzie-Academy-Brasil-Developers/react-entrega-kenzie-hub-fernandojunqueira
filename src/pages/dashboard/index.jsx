import React from 'react'
import { ContainerDash,ButtonLinkRegister } from './style'

const Dashboard = ({ user }) => {

const logOut = () =>{
    localStorage.removeItem('@KenzieHubToken')
    localStorage.removeItem('@KenzieHubId')
}

  return (
    <ContainerDash>
        <div className="container">
            <nav>         
                    <h1>Kenzie Hub</h1>
                    <ButtonLinkRegister onClick={logOut} to={'/'}>Sair</ButtonLinkRegister>
            </nav>
        </div>
        <div className='container'>
            <header>
                <h2>Olá, {user.user}</h2>
                <span>{user.module}</span>
            </header>
        </div>
        <main>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </main>
    </ContainerDash>
  )
}

export default Dashboard