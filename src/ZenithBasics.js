import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavbarSmall from './shared/components/navbar/NavbarSmall'
import Navbar from './shared/components/navbar/Navbar'
import Home from './home/Home'


export default function ZenithBasics() {
  return (
    <>
        <Navbar />
        <NavbarSmall />
        <Routes>
            <Route path='*' element={<Home />}/>
        </Routes>
    </>
    
  )
}
