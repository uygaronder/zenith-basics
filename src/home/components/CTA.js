import React from 'react'

import "../css/CTA.css"

import Image from "../res/pexels-kai-pilger-996329.jpg"

function CTA() {
  return (
    <section id='cta'>
        <div className='imageContainer'>
            <span></span>
            <img src={Image} alt='ctaImg'/>
        </div>
        <div className='ctaText'>
            <h1>"Completing The Essentials"</h1>
        </div>
    </section>
  )
}

export default CTA