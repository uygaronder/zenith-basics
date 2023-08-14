import React from 'react'
import Register from './components/Register'
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom'

import './css/LoginPage.css'

function LoginPage() {
  return (
    <div id='loginPage' >
      <Routes>
        <Route element={<Register />} path='register'/>
        <Route element={<SignIn />} path='signin'/>
        <Route element={<SignIn />} path='*'/>
      </Routes>
    </div>
  )
}

export default LoginPage