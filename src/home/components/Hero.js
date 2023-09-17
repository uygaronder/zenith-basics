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


function switchHeroPage(pageNumber) {
    const heroContainer = document.getElementById('heroItems')
    const sliderButtons = document.querySelectorAll('.option');
    const sliderSelector = document.querySelector('.selector');

    sliderSelector.style.left = `${pageNumber * 50}%`;
    heroContainer.style.transform = `translateX(-${(pageNumber) * 100}%)`
}

function Hero() {

  return (
    <section id='hero'>
        <div id='heroSlideContainer'>
            <span id='slideIndicatorContainer'>
                <span id='slideIndicator'>
                    <span className='selector'></span>
                    <span onClick={() => switchHeroPage(0)} className='option'></span>
                    <span onClick={() => switchHeroPage(1)} className='option'></span>
                </span>
            </span>
        </div>
        <div id='heroItems'>
            {
                heroItems.map((item, index) => {
                    return (
                        <div className='heroItem' key={index}>
                            <div className='imageContainer'>
                                <img src={item.image} alt='hero-1' />
                                <span className='blender'/>
                            </div>
                            <div className='heroText'>
                                <span>{item.text.title}</span>
                                <h1>{item.text.subtitle}</h1>
                                <span>{item.text.description}</span>
                                <span className='heroLink'>{item.text.link}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
        <HeroCategories />
    </section>
  )
}

export default Hero