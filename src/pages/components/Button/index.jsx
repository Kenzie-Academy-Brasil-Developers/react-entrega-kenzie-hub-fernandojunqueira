import React from 'react'
import { StyledButton } from './styled'

const Button = ({color,background,children}) => {
  return (
    <StyledButton 
    color={color}
    background={background}
    >
      {children}
    </StyledButton>
  )
}

export default Button