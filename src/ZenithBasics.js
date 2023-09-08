import React,{useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import NavbarSmall from './shared/components/navbar/NavbarSmall'
import Navbar from './shared/components/navbar/Navbar'
import Footer from "./shared/components/footer/Footer1"
import Home from './home/Home'
import NotFound from './shared/components/notFound/NotFound'
import SearchPage from './search/searchPage/SearchPage'
import ProductPage from './productPage/ProductPage'
import LoginPage from './loginPage/LoginPage'
import Admin from "./admin/AdminPage"
import Loading from './shared/components/loading/Loading'


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
      console.log(data.user)
    })
  }

  useState(() => {
    fetchUser()
  }, [])

  function ProtectedRoute({loggedIn, adminOnly, children, toSend ,navigateTo}) {
    if(loggedIn && user){
      if(adminOnly){
        if(user.admin){
          return children
        }else{
          return toSend
        }
      }else{
        return children
      }
    } else if(loggedIn && !user){
      return toSend
    } else {
      return <Navigate to={navigateTo} />
    }
  }

  return (
    <>
      <Navbar user={user}/>
      <NavbarSmall user={user}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductPage />}/>
        <Route path='/search/:query/:category?' element={<SearchPage />}/>
        <Route path='/login/*' element={<LoginPage />}/>
        <Route path='/admin/*' element={
          <ProtectedRoute loggedIn={true} adminOnly={true} toSend={<Loading />} navigateTo={"/"} ><Admin /></ProtectedRoute>
        }/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  )
}
