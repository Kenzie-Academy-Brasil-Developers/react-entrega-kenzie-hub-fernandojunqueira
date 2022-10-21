import { createContext,  ReactNode,  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from "react-toastify/dist/types";
import api from "../services/api";

interface iUserContextProps{
  children: ReactNode;
}

interface iLoginBody{
  email: string;
  password: string;
}

interface iRegisterBody{
  
  email: string ; 
  password: string ; 
  name: string ; 
  bio: string ; 
  contact: string ; 
  course_module: string ; 
  
}

interface iTechs{
  id: string ; 
  title: string ; 
  status: string ; 
  created_at: string ; 
  updated_at: string ; 
  map?: any;
}
interface iProfile{
  
  id: string; 
  name: string;
  email: string;
  course_module:string;
  bio: string;
  contact: string;
  techs: 
    {
    id: string ; 
    title: string ; 
    status: string ; 
    created_at: string ; 
    updated_at: string ; 
  }
,
  works: [],
  created_at: string;
  updated_at: string;
  avatar_url: null;
  
}
interface iData{
  user: iProfile;
  token: string;
}

interface iLogin{
  data: iData;
}

interface iOpenModal{
  title: string;
  id: string;
}

interface iResponse{
  data: iProfile
}

interface iValuesProps{
  user:iProfile | null;
  setUser:React.Dispatch<React.SetStateAction<iProfile | null>>;
  loading:boolean;
  setLoading:React.Dispatch<React.SetStateAction<boolean>>;
  loadingPage:boolean;
  setLoadingPage?:React.Dispatch<React.SetStateAction<boolean>>;
  techs:iTechs | null;
  setTechs?:React.Dispatch<React.SetStateAction<iTechs | null>>;
  close:boolean;
  setClose:React.Dispatch<React.SetStateAction<boolean>>;
  del:string | null;
  setDel:React.Dispatch<React.SetStateAction<string | null>>;
  openUpdateModal:iOpenModal | null;
  setOpenUpdateModal:React.Dispatch<React.SetStateAction<iOpenModal | null>>;

  loginUser: (body:iLoginBody) => void;
  registerUser: (body:iRegisterBody) => void;
  logOut: () => void;

}

export const UserContext = createContext({} as iValuesProps)


function UserProvider({children}:iUserContextProps){

    const [user, setUser] = useState<iProfile | null>(null)
    const [loading, setLoading] = useState(false)
    const [loadingPage, setLoadingPage] = useState(true)
    const [techs, setTechs] = useState<iTechs | null>(null)
    const [close, setClose] = useState(false)
    const [del, setDel] = useState<string | null>(null)
    const [openUpdateModal,setOpenUpdateModal] = useState<iOpenModal | null>(null)
    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
      async function loadUser(){
        const token = localStorage.getItem('@KenzieHubToken')
        
        if(token) {
          try {


            // api.defaults.headers.common.authorization = `Bearer ${token}`
            // api.defaults.headers.common.authorization

            // api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
            const response:iResponse = await api.get('/profile',{headers:{'Authorization': `Bearer ${token}`}})

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

    const loginUser = async (body:iLoginBody) => {
        try {
      
          setLoading(true)
      
          const {data}:iLogin = await api.post('sessions',body)

          api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      
          setUser(data.user)
          
          setTechs(data.user.techs)
      
          localStorage.setItem('@KenzieHubToken',data.token)
          localStorage.setItem('@KenzieHubId',data.user.id)
      
          toast.success("Login realizado com sucesso!", {
            theme: "dark"
          })

          const toNavigate:string = location.state?.from?.pathname ||  'dashboard'
      
          navigate(toNavigate ,{replace:true})
      
        } catch ({response}) {
          
        toast.error(`Email ou senha incorreta`, {
          theme: "dark"
        })
      
        } finally{
          setLoading(false)
        }
      }

    const  registerUser = async (body:iRegisterBody) => {
      try {
          setLoading(true)
           await api.post('users',body)

          toast.success("Conta criada com sucesso!", {
              theme: "dark"
            })
            
          navigate('/')
            
    } catch (error) {

          toast.error(`Email já cadastrado`, {
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
        <UserContext.Provider value={ { user,setUser,loading,setLoading,loginUser,registerUser,loadingPage,logOut, techs, close, setClose, del, setDel ,openUpdateModal,setOpenUpdateModal } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider