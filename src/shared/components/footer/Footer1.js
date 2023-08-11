import React from 'react'

import "../../css/Footer.css"

import Logo from "../../res/logo/zenithbasics-high-resolution-logo-white-on-transparent-background.png"

function Footer() {
  return (
    <footer>
      <section id='footerUp'>
        <div id='footerLogoTab'>
          <span className='logoContainer'>
            <img src={Logo} alt='logo'/>
            <h3>"Complete The Essentials"</h3>
          </span>
          <span className='linksContainer'>
            <h3>SocialLinks</h3>
          </span>
        </div>
        <div className='links'>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
        </div>
        <div className='links'>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
        </div>
        <div className='links'>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
        </div>
        <div className='links'>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
          <span>Link</span>
        </div>
      </section>
      <section id='footerDown'>
        <a href='https://dribbble.com/andikart/shots' target='_blank'>Design By</a>
      </section>
      
    </footer>
  )
}

export default Footer