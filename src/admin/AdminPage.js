import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./css/adminPage.css"

import AdminSidebar from './components/Admin-Sidebar'
import AdminHome from './components/Admin-Home'
import AdminProducts from './components/AdminProducts'

const fetchSiteData = () => {
  fetch(`${process.env.REACT_APP_APIURL}/siteData`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });
}

function Admin() {
  return (
    <section id='adminPage'>
      <AdminSidebar />
      <Routes>
        <Route path='/' element={<AdminHome />} />
        <Route path='/products' element={<AdminProducts />} />
      </Routes>
    </section>
  )
}

export default Admin