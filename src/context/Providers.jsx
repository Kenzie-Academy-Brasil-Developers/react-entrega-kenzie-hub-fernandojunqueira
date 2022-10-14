import TechProvider from "./TechContext";
import UserProvider from "./UserContext";

import React from 'react'

const Provider = ({children}) => {
  return (
    <UserProvider>
        <TechProvider>
            {children}
        </TechProvider>
    </UserProvider>
  )
}

export default Provider