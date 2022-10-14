import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

function TechProvider({children}){

    const { close, setClose, setDel } = useContext(UserContext)

    
  

    const registerNewTech = async (body) => {
        try {
          await api.post('users/techs',body)

        //   const res = await api.get('/profile')
        //   console.log(res)
        //   setTechs(res.data.techs)
        
          toast.success("Nova tecnologia cadastrada", {
            theme: "dark"
          })
          
          setClose(false)

        } catch (error) {
            toast.error(`${error.response.data.message}`, {
                theme: "dark"
              })
        }   
    }

    const deleteTech = async (id) => {
        try {
            const response = await api.delete(`users/techs/${id}`)

            setDel(response)
            toast.success("Tecnologia deletada", {
                theme: "dark"
              })
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <TechContext.Provider value={{ registerNewTech, setClose , close , deleteTech  }}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider