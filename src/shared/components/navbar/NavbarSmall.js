import React from 'react'
import '../../css/NavbarSmall.css'

import Bars from "../../res/svg/bars-solid.svg"

function NavbarSmall() {
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
        <section id='smallRightLinks'>
            <span>
                <a href='/'>Sign In</a>
            </span>
            <div className='divider' />
            <span>
                <a href='/'>Login</a>
            </span>
        </section>
        
    </nav>
  )
}

export default NavbarSmall