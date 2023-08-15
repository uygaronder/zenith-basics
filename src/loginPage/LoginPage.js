import React from 'react'
import Register from './components/Register'
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom'

import './css/LoginPage.css'

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const passwordRegex = /^.{6,}$/
const fullnameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

function LoginPage() {
  return (
    <div id='loginPage' >
      <Routes>
        <Route element={<Register regexes={{emailRegex:emailRegex,passwordRegex:passwordRegex,fullnameRegex:fullnameRegex}}/>} path='register'/>
        <Route element={<SignIn emailRegex={emailRegex} />} path='signin'/>
        <Route element={<SignIn emailRegex={emailRegex} />} path='*'/>
      </Routes>
    </div>
  )
}

export default LoginPage