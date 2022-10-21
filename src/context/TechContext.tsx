import { createContext, ReactNode, useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../services/api";
import { UserContext } from "./UserContext";

interface iTechContextProps{
  children: ReactNode;
}

interface iRegisterNewTech{
  title: string;
  status: string;
}

interface iUpdateTech{
  status: string;
}

interface iTechContext{
  registerNewTech: (body:iRegisterNewTech) => void;
  updateTech: (body:iUpdateTech) => void;
  deleteTech: () => void;
}

export const TechContext = createContext({} as iTechContext)

function TechProvider({children}:iTechContextProps){

    const { close, setClose, setDel , openUpdateModal , setOpenUpdateModal } = useContext(UserContext)

    const registerNewTech = async (body:iRegisterNewTech) => {
        try {
          await api.post('users/techs',body)
        
          toast.success("Nova tecnologia cadastrada", {
            theme: "dark"
          })
          
          setClose(false)

        } catch (error) {
            toast.error(`Essa tecnologia já foi criada.`, {
                theme: "dark"
              })
        }   
    }

    const updateTech =  async (body:iUpdateTech) => {
    
      try {
        await api.put(`/users/techs/${openUpdateModal?.id}`,body)

        toast.success("Tecnologia atualizada", {
          theme: "dark"
        })

        setOpenUpdateModal(null)

      } catch (error) {
        console.error(error)
      }
    }

    const deleteTech = async () => {
      const token = localStorage.getItem('@KenzieHubToken')

        try {
            const response = await api.delete(`users/techs/${openUpdateModal?.id}`,{headers:{'Authorization': `Bearer ${token}`}})

            setDel('Deleted')
            setOpenUpdateModal(null)

        } catch (error) {
            console.error(error)
        }
    }

    return(
        <TechContext.Provider value={{ registerNewTech  , deleteTech, updateTech  }}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider