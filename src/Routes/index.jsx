import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '../components/PortectedRoutes'
import Dashboard from '../pages/dashboard'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'

const RoutesMain = ({ user,setUser }) => {
  return (
    <Routes>
        <Route index element={<LoginPage user={user} setUser={setUser} />}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route element={<ProtectedRoutes/>}>
           <Route path='/dashboard' element={<Dashboard user={user}/>}/>
        </Route>
        <Route path='*' element={<Navigate to={'/'} />}/>
    </Routes>
  )
}

export default RoutesMain