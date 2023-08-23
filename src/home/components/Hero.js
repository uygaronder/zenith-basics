import React from 'react'
import "../css/Hero.css"

import HeroCategories from "./HeroCategories"

import hero1 from "../res/pexels-liza-summer-6347888.jpg"
import hero2 from "../res/pexels-web-donut-19090.jpg"

const heroItems = [
    {
        image: hero1,
        text: {
            title: "#Big Basics Sale",
            subtitle: "Limited Time Offer! Up to 50% OFF!",
            description: "Complete the Essentials",
            link: "Shop Now"
        }
    },
    {
        image: hero2,
        text: {
            title: "Shoe Restock",
            subtitle: "Shop Shoes",
            description: "Explore"
        }
    }
]


function switchHeroPage() {
    const heroContainer = document.getElementById('heroImages')
}

function Hero() {

  return (
    <section id='hero'>
        <div id='heroItems'>
            <div className='heroItem'>
                <div className='imageContainer'>
                    <img src={hero1} alt='hero-1' />
                    <span className='blender'/>
                </div>
                <div className='heroText'>
                    <span>#Big Basics Sale</span>
                    <h1>Limited Time Offer! <br/> Up to 50% OFF!</h1>
                    <span>Complete the Essentials</span>
                </div>
            </div>
        </div>
        <span id='slideIndicatorContainer'>
            <span id='slideIndicator'>
                <span className='selector'></span>
                <span className='option'></span>
                <span className='option'></span>
            </span>
        </span>
        
        <HeroCategories />
    </section>
  )
}

export default Hero

/*
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

*/