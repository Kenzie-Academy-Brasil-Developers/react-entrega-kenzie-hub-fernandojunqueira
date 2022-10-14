import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const ProtectedRoutes = () => {
    const { user, loadingPage } = useContext(UserContext)
    const location = useLocation()

    if(loadingPage){
        return null
    }

    return user ? <Outlet/> :  <Navigate to='/' replace  state={{ from: location }}/>
}

export default ProtectedRoutes