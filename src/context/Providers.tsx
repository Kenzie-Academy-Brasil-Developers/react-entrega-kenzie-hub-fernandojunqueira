import TechProvider from "./TechContext";
import UserProvider from "./UserContext";

import React, { ReactNode } from 'react'

interface iProvider{
  children: ReactNode;
}

const Provider = ({children}:iProvider) => {
  return (
    <UserProvider>
        <TechProvider>
            {children}
        </TechProvider>
    </UserProvider>
  )
}

export default Provider