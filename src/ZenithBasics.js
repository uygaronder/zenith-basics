import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavbarSmall from './shared/components/navbar/NavbarSmall'
import Navbar from './shared/components/navbar/Navbar'
import Footer from "./shared/components/footer/Footer1"
import Home from './home/Home'
import ProductPage from './productPage/ProductPage'
import LoginPage from './loginPage/LoginPage'

const user = () => {
  fetch(`${process.env.REACT_APP_APIURL}/user/sendLoggedInUser`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    if(data.user) {
      localStorage.setItem('user', JSON.stringify(data.user))
    }
  })
}

export default function ZenithBasics() {
  user()
  return (
    <>
      <Navbar />
      <NavbarSmall />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<ProductPage />}/>
        <Route path='/login/*' element={<LoginPage />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
      <Footer />
    </>
  )
}
