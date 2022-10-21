import React, { useContext } from 'react'
import RegisterModal from '../../components/RegisterModal'
import UpdateModal from '../../components/UpdateModal'
import { TechContext } from '../../context/TechContext'
import { UserContext } from '../../context/UserContext'
import { ContainerDash,ButtonLinkRegister, StyledList, StyledCard, StyledMain } from './style'

interface iTechs{
    id: string ; 
    title: string ; 
    status: string ; 
    created_at: string ; 
    updated_at: string ; 
  }

const Dashboard = () => {
    const { user, logOut , techs ,  setOpenUpdateModal , openUpdateModal ,close , setClose } = useContext(UserContext)
    // const {    } = useContext(TechContext)

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
            {techs?.map((tech:iTechs,index:number) => 
                <StyledCard key={index} onClick={() => setOpenUpdateModal({title: tech.title,id: tech.id})}>
                    <h2>{tech.title}</h2>
                    <div>
                        <p>{tech.status}</p>
                    </div>
                </StyledCard>
            )}
            </StyledList>
        </StyledMain>
        { close ? (<RegisterModal/>) : (<p></p>) }
        { openUpdateModal ? (<UpdateModal />) : (<p></p>) }
        
    </ContainerDash>
    
  )
}

export default Dashboard