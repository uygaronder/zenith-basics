import React,{useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import NavbarSmall from './shared/components/navbar/NavbarSmall'
import Navbar from './shared/components/navbar/Navbar'
import Footer from "./shared/components/footer/Footer1"
import Home from './home/Home'
import ProductPage from './productPage/ProductPage'
import LoginPage from './loginPage/LoginPage'
import Admin from "./admin/AdminPage"


export default function ZenithBasics() {
  const [user, setUser] = useState(null);
  const [siteData, setsiteData] = useState(null);

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
  const fetchUser = () => {
    fetch(`${process.env.REACT_APP_APIURL}/user/sendLoggedInUser`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setUser(data.user)
    })
  }

  useState(() => {
    fetchUser()
  }, [])


  return (
    <>
      <Navbar user={user}/>
      <NavbarSmall user={user}/>
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
