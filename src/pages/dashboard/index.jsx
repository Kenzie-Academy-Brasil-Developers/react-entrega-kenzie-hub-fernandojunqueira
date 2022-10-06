import React from 'react'
import { ContainerDash } from './style'

const Dashboard = () => {
  return (
    <ContainerDash>
        <div className="container">
            <nav>         
                    <h1>Kenzie Hub</h1>
                    <button>Sair</button>
            </nav>
        </div>
        <div className='container'>
            <header>
                <h2>Olá, Samuel Leão</h2>
                <span>Primeiro módulo (Introdução ao Frontend)</span>
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