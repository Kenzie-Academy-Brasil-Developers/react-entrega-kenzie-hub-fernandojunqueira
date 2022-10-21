import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../../context/TechContext'
import { UserContext } from '../../context/UserContext'
import { schema } from '../../validations/updateTech'
import { StyledButton } from '../Button/styled'
import { StyledForm } from '../Form/style'
import { StyledInput } from '../Inputs/style'
import { StyledModal } from '../RegisterModal/styled'
import { StyledDiv } from './style'


interface iUpdateTech{
    status: string;
  }

const UpdateModal    = () => {
    
    const { updateTech , deleteTech } = useContext(TechContext)
    const {  setOpenUpdateModal , openUpdateModal } = useContext(UserContext)

    const { register, handleSubmit,formState:{ errors } } = useForm<iUpdateTech>({
        resolver: yupResolver(schema),  
    });

    console.log(errors)

  return (
        <StyledModal>
            <div className="overlay">
                <div className="content">
                    <header className='header__modal'>
                        <h2>Cadastrar Tecnologia</h2>
                        <button type='button' onClick={() => setOpenUpdateModal(null)}>X</button>
                    </header>

                    <StyledForm className='form__modal' onSubmit={handleSubmit(updateTech)}>
                        <label htmlFor='email'>Nome</label>
                        <StyledInput 
                        type="text" 
                        id='email' 
                        placeholder='Digite aqui a tecnologia'
                        value={openUpdateModal?.title}
                        disabled         
                        />
                        
                       

                        <label htmlFor='module' >Selecionar status</label>
                        <select  id="module" {...register("status")}>
                            <option value="Iniciante" >Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        
                        <StyledDiv>
                            <StyledButton 
                            type='submit'
                            color={"#ffffff"} 
                            background={"#FF577F"}
                            padding={'0 29px'}
                            >Salvar Alterações</StyledButton>

                            <StyledButton 
                            onClick={() => deleteTech() }
                            color={"#ffffff"} 
                            background={"#868E96"}
                            padding={'0 22px'}
                            >Excluir</StyledButton>
                        </StyledDiv>
                        

                    </StyledForm>
                </div>
            </div>

        </StyledModal>
  )
}

export default UpdateModal  