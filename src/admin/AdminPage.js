import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./css/adminPage.css"

import AdminSidebar from './components/Admin-Sidebar'
import AdminHome from './components/Admin-Home'

const fetchSiteData = async () => {
  fetch(`${process.env.REACT_APP_API_URL}/siteData`)
}

function Admin() {
  return (
    <section id='adminPage'>
      <AdminSidebar />
      <Routes>
        <Route path='/' element={<AdminHome />} />
      </Routes>
    </section>
  )
}

export default Admin