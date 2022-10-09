import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'

const RoutesMain = ({ user,setUser }) => {
  return (
    <Routes>
        <Route index element={<LoginPage user={user} setUser={setUser} />}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard user={user}/>}/>
        <Route path='*' element={<Navigate to={'/'} />}/>
    </Routes>
  )
}

export default RoutesMain