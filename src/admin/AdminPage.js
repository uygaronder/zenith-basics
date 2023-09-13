import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import "./css/adminPage.css"
import "./css/adminRoot.css"

import AdminSidebar from './components/Admin-Sidebar'
import AdminHome from './components/Admin-Home'
import AdminProducts from './components/AdminProducts'
import NewPrododuct from './components/New-Prododuct'
import Loading from '../shared/components/loading/Loading'



function Admin({siteData}) {

  return (
    <section id='adminPage'>
      <AdminSidebar />
      {/* <Loading /> */}
      {siteData ? 
      <Routes>
        <Route path='/' element={<AdminHome siteData={siteData}/>} />
        <Route path='/products' element={<AdminProducts siteData={siteData}/>} />
        <Route path='/products/new' element={<NewPrododuct siteData={siteData}/>} />
      </Routes> : <Loading loadingText="Fetching Site Data..."/>
      }
      
    </section>
  )
}

export default Admin