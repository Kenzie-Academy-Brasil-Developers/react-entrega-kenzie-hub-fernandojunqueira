import { createContext, ReactNode } from "react";

interface iWorkContextProps{
    children: ReactNode;
}

export const WorkContext = createContext({})

export function workProvider({children}:iWorkContextProps){
    console.log('oi')
    return(
        <h1>Oi</h1>
        // <WorkContext.Provider value={}>
        //     {children}
        // <WorkContext.Provider/>
    )
    
}