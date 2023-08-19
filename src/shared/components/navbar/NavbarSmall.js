import React, { useEffect } from 'react'
import '../../css/NavbarSmall.css'

import Bars from "../../res/svg/bars-solid.svg"
import { Link } from 'react-router-dom'

function NavbarSmall(user) {
  user = user.user;
  return (
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
  )
}

export default NavbarSmall