import React from 'react'
import Register from './components/Register'
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom'

import './css/LoginPage.css'

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const fullnameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

function validateRegex(regex, value) {
  return regex.test(value)
}

function LoginPage() {
  return (
    <div id='loginPage' >
      <Routes>
        <Route element={<Register regexes={{emailRegex:emailRegex,passwordRegex:passwordRegex,fullnameRegex:fullnameRegex}}/>} path='register'/>
        <Route element={<SignIn />} path='signin'/>
        <Route element={<SignIn />} path='*'/>
      </Routes>
    </div>
  )
}

export default LoginPage