import React from 'react'
import "../css/Hero.css"

import HeroCategories from "./HeroCategories"

import hero1 from "../res/pexels-liza-summer-6347888.jpg"
import hero2 from "../res/pexels-web-donut-19090.jpg"

function Hero() {

  return (
    <section id='hero'>
        <span id='heroImages'>
            <span className='heroImage'>
                <img src={hero1} alt='hero-1' />
                <span className='blender'/>
            </span>
            <span className='heroImage'>
                <img src={hero2} alt='hero-2' />
                <span className='blender'/>
            </span>
        </span>
        <div id='heroUpper'>
            <span id='heroTexts'>
                <div className='heroText'>
                    <span>#Big Basics Sale</span>
                    <h1>Limited Time Offer! <br/> Up to 50% OFF!</h1>
                    <span>Complete the Essentials</span>
                </div>
                <div className='heroText'>
                    <span>Shoe Restock</span>
                    <h1>Shop Shoes <br/> </h1>
                    <span>Explore</span>
                </div>
            </span>
            <span id='slideIndicatorContainer'>
                <span id='slideIndicator'>
                    <span className='selector'></span>
                    <span className='option'></span>
                    <span className='option'></span>
                </span>
            </span>
            
        </div>
        <HeroCategories />
    </section>
  )
}

export default Hero