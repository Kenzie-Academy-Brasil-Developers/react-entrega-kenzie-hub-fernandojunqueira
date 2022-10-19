import { createContext, useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

function TechProvider({children}){

    const { close, setClose, setDel , openUpdateModal , setOpenUpdateModal } = useContext(UserContext)

    const registerNewTech = async (body) => {
        try {
          await api.post('users/techs',body)
        
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

    const updateTech =  async (body) => {
    
      try {
        await api.put(`/users/techs/${openUpdateModal.id}`,body)

        toast.success("Tecnologia atualizada", {
          theme: "dark"
        })

        setOpenUpdateModal(null)

      } catch (error) {
        console.error(error)
      }
    }

    const deleteTech = async () => {
        try {
            const response = await api.delete(`users/techs/${openUpdateModal.id}`)

            setDel(response)
            setOpenUpdateModal(null)

        } catch (error) {
            console.error(error)
        }
    }

    return(
        <TechContext.Provider value={{ registerNewTech, setClose , close , deleteTech, updateTech  }}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider