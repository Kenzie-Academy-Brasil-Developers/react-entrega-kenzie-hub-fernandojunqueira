import { createContext,  ReactNode,  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProfile, iProfile } from "../services/getProfiles";
import { iLoginBody, postLogin } from "../services/postLogin";
import { iRegisterBody, postRegister } from "../services/postRegister";

interface iUserContextProps{
  children: ReactNode;
}

interface iTechs{
  id: string ; 
  title: string ; 
  status: string ; 
  created_at: string ; 
  updated_at: string ; 
  map?: any;
}

interface iWorks{
	id: string ;
	title: string ;
	description: string ;
	deploy_url: string ;
	user: {
		id: string ;
	},
	created_at: string ;
	updated_at: string ;
}

interface iOpenModal{
  title: string;
  id: string;
}

interface iUserContext{
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
  works: iWorks[] |  null;
  setWorks : React.Dispatch<React.SetStateAction<iWorks[] | null>>;

  loginUser: (body:iLoginBody) => void;
  registerUser: (body:iRegisterBody) => void;
  logOut: () => void;

}

export const UserContext = createContext<iUserContext>({} as iUserContext)


function UserProvider({children}:iUserContextProps){  

    const [user, setUser] = useState<iProfile | null>(null)
    const [loading, setLoading] = useState(false)
    const [loadingPage, setLoadingPage] = useState(true)
    const [techs, setTechs] = useState<iTechs | null>(null)
    const [works, setWorks] = useState<iWorks[] | null>([])
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

           const data = await getProfile(token)

            setUser(data)
            setTechs(data.techs)
            setWorks(data.works)
            
          } catch (error) {
            console.error(error)
          }

        }
        setLoadingPage(false)

      }
      loadUser()
      
      }
    , [close,del,openUpdateModal])

    const loginUser = async (body:iLoginBody):Promise<void> => {
        try {
      
          setLoading(true)
      
          const data = await postLogin(body)
      
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
          postRegister(body)

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
        <UserContext.Provider value={ { user,setUser,loading,setLoading,loginUser,registerUser,loadingPage,logOut, techs, close, setClose, del, setDel ,openUpdateModal,setOpenUpdateModal,setWorks,works } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider