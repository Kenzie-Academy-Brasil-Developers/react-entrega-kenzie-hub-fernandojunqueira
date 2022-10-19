import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../services/api";

export const UserContext = createContext({})


function UserProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [loadingPage, setLoadingPage] = useState(true)
    const [techs, setTechs] = useState(null)
    const [close, setClose] = useState(false)
    const [del, setDel] = useState(null)
    const [openUpdateModal,setOpenUpdateModal] = useState(null)
    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
      async function loadUser(){
        const token = localStorage.getItem('@KenzieHubToken')

        if(token) {
          try {
            api.defaults.headers.authorization = `Bearer ${token}`
  
            const response = await api.get('/profile')

            setUser(response.data)
            setTechs(response.data.techs)
            
          } catch (error) {
            console.error(error)
          }

        }
        setLoadingPage(false)

      }
      loadUser()
      
      }
    , [close,del,openUpdateModal])

    const loginUser = async (data) => {
        try {
      
          setLoading(true)
      
          const response = await api.post('sessions',data)

          api.defaults.headers.authorization = `Bearer ${response.data.token}`
      
          setUser(response.data.user)
          
          setTechs(response.data.user.techs)
      
          localStorage.setItem('@KenzieHubToken',response.data.token)
          localStorage.setItem('@KenzieHubId',response.data.user.id)
      
          toast.success("Login realizado com sucesso!", {
            theme: "dark"
          })

          const toNavigate = location.state?.from?.pathname ||  'dashboard'
      
          navigate(toNavigate ,{replace:true})
      
        } catch (error) {
      
        toast.error(`${error.response.data.message}`, {
          theme: "dark"
        })
      
        } finally{
          setLoading(false)
        }
      }

    const  registerUser = async (data) => {
      try {
          setLoading(true)
           await api.post('users',data)

          toast.success("Conta criada com sucesso!", {
              theme: "dark"
            })
            
          navigate('/')
            
    } catch (error) {

          toast.error(`${error.response.data.message}`, {
              theme: "dark"
            })

   } finally{
          setLoading(false)
   }
      }

    const logOut = () =>{
        localStorage.removeItem('@KenzieHubToken')
        localStorage.removeItem('@KenzieHubId')
    }



    return(
        <UserContext.Provider value={ { user,setUser,loading,setLoading,toast,loginUser,registerUser,loadingPage,logOut, techs, close, setClose, del, setDel ,openUpdateModal,setOpenUpdateModal } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider