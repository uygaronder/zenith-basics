import React, { useEffect } from 'react'
import '../../css/NavbarSmall.css'

import Bars from "../../res/svg/bars-solid.svg"
import { Link } from 'react-router-dom'

function NavbarSmall({user, siteData}) {
  const darkScreenRef = React.useRef();
  const categoriesPopupRef = React.useRef();
  const categoriesDarkScreenRef = React.useRef();

  function signOut(){
    fetch(`${process.env.REACT_APP_APIURL}/user/logout?_method=DELETE`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  }

  function toggleDarkScreen(){
    darkScreenRef.current.classList.toggle('darkScreenActive');
    darkScreenRef.current.classList.contains('darkScreenActive') ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
  }

  function toggleUserPopup(){
    document.getElementById('userPopupContainer').classList.toggle('userPopupActive');
    toggleDarkScreen();
  }

  function toggleCategoriesPopup(){
    categoriesDarkScreenRef.current.classList.toggle('categoriesDarkScreenActive');
    categoriesDarkScreenRef.current.classList.contains('categoriesDarkScreenActive') ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
    categoriesPopupRef.current.classList.toggle('categoriesPopupActive');
  }

  return (
    <>
    <nav id='NavbarSmall'>
        <section id='smallLeftLinks'>
          <span id='categories' onClick={() => toggleCategoriesPopup()}>
            <span className='categoryLogo'>
              <img className='svgSmall' src={Bars} alt='Categories' />
            </span>
            <p>All</p>
          </span>
          <span>
            <a href='/'>Today's Deals</a>
          </span>
          <span>
            <a href='/'>About</a>
          </span>
          <span>
            <a href='/'>Customer Service</a>
          </span>
        </section>
        {user ? 
        <section id='smallNavUserInfo'>
          <span id='userName' onClick={() => toggleUserPopup()}>{user.name}</span>
          <span id='userPopupContainer'>
            <span id='userPopup'>
              <span className='popupArrow'></span>
              <div>
                <h4>Your Account</h4>
                <span>
                  <Link onClick={() => toggleUserPopup()} to={"user/profile"}>Profile</Link>
                </span>
                <span>
                  <span onClick={() => signOut()}>Sign Out</span>
                </span>
              </div>
            </span>
          </span>
        </section>:
        <section id='smallRightLinks'>
            <span>
                <Link to={"login/register"}>Register</Link>
            </span>
            <div className='divider' />
            <span>
              <Link to={"login/login"}>Login</Link>
            </span>
        </section>}
        
        
    </nav>
    <span ref={categoriesPopupRef} id='categoriesPopup'>
          <h2>Categories</h2>
          <div id='categoriesList'>
            {siteData && siteData.category ? siteData.category.map((category, index) => {
              return (
                <span key={index}>
                  <Link onClick={() => toggleCategoriesPopup()} to={`/search/all/${category.slug}`}>{category.slug}</Link>
                </span>
              )}) : null
            }
          </div>
    </span>
    <span onClick={() => toggleUserPopup()} ref={darkScreenRef} id='darkScreen'></span>
    <span onClick={() => toggleCategoriesPopup()} ref={categoriesDarkScreenRef} id='categoriesDarkScreen'></span>
    </>
  )
}

export default NavbarSmall