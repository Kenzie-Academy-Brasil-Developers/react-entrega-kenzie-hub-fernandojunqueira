import React from 'react'
import { StyledInput } from './style'

const Input = ({type,id,placeholder}) => {
  return (
    <StyledInput 
     type={type} 
     id={id}
     placeholder={placeholder}
    />
  )
}

export default Input