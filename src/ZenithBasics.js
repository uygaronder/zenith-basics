import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavbarSmall from './shared/components/navbar/NavbarSmall'
import Navbar from './shared/components/navbar/Navbar'
import Footer from "./shared/components/footer/Footer1"
import Home from './home/Home'
import ProductPage from './productPage/ProductPage'
import LoginPage from './loginPage/LoginPage'


export default function ZenithBasics() {
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
