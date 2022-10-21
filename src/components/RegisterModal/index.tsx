import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../../context/TechContext'
import { UserContext } from '../../context/UserContext'
import { schema } from '../../validations/registerNewTech'
import { StyledButton } from '../Button/styled'
import { StyledForm } from '../Form/style'
import { StyledInput } from '../Inputs/style'
import { StyledModal } from './styled'

interface iRegisterNewTech{
    title: string;
    status: string;
  }

const RegisterModal = () => {
    
    const { registerNewTech  } = useContext(TechContext)
    const { setClose } = useContext(UserContext)

    const { register, handleSubmit,formState:{ errors } } = useForm<iRegisterNewTech>({
        resolver: yupResolver(schema),  
    });

  return (
        <StyledModal>
            <div className="overlay">
                <div className="content">
                    <header className='header__modal'>
                        <h2>Cadastrar Tecnologia</h2>
                        <button type='button' onClick={() => setClose(false)}>X</button>
                    </header>

                    <StyledForm className='form__modal' onSubmit={handleSubmit(registerNewTech)}>
                        <label htmlFor='email'>Nome</label>
                        <StyledInput 
                        type="text" 
                        id='email' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("title")}
                        />
                        <p>{errors?.title?.message}</p>
                        
                       

                        <label htmlFor='module' >Selecionar status</label>
                        <select  id="module" {...register("status")}>
                            <option value="Iniciante" >Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        
                  
                        <StyledButton 
                        type='submit'
                        color={"#ffffff"} 
                        background={"#FF577F"}
                        >Cadastrar Tecnologia</StyledButton>

                    </StyledForm>
                </div>
            </div>

        </StyledModal>
  )
}

export default RegisterModal