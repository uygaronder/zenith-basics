import React, { useEffect } from 'react'
import '../../css/NavbarSmall.css'

import Bars from "../../res/svg/bars-solid.svg"
import { Link } from 'react-router-dom'

function NavbarSmall(user) {
  user = user.user;
  const darkScreenRef = React.useRef();

  function signOut(){
    fetch(`${process.env.REACT_APP_APIURL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  }
  return (
    <>
    <nav id='NavbarSmall'>
        <section id='smallLeftLinks'>
          <span id='categories'>
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
          <span>{user.name}</span>
          <span id='userPopupContainer'>
            <span id='userPopup'>
              <span className='popupArrow'></span>
              <div>
                <h4>Your Account</h4>
                <span>
                  <Link to={"user/profile"}>Profile</Link>
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
    <span ref={darkScreenRef} id='darkScreen'></span>
    </>
  )
}

export default NavbarSmall