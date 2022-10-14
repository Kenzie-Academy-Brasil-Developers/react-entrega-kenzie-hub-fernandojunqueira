import React, { useContext } from 'react'
import RegisterModal from '../../components/RegisterModal'
import { TechContext } from '../../context/TechContext'
import { UserContext } from '../../context/UserContext'
import { ContainerDash,ButtonLinkRegister, StyledList, StyledCard, StyledMain } from './style'
import trash from './trash.png'

const Dashboard = () => {
    const { user, logOut , techs  } = useContext(UserContext)
    const { close , setClose , deleteTech } = useContext(TechContext)
    

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
                <h2>Olá, {user?.name}</h2>
                <span>{user?.course_module
}</span>
                
            </header>
        </div>
        <StyledMain>
            <div className='tech'>
                <h2>Tecnologias</h2>
                <button type='button' onClick={() => setClose(true)}>+</button>
            </div>
            <StyledList>
            {techs?.map((tech,index) => 
                <StyledCard key={index}>
                    <h2>{tech.title}</h2>
                    <div>
                        <p>{tech.status}</p>
                        <img src={trash} alt="Lixeira" onClick={() => deleteTech(tech.id)} />
                    </div>
                </StyledCard>
            )}
            </StyledList>
        </StyledMain>
        { close ? (<RegisterModal/>) : (<p></p>) }
        
    </ContainerDash>
    
  )
}

export default Dashboard