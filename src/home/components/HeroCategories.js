import React from 'react'
import "../css/HeroCategories.css"

import TShirt from "../res/cat-shirt.jpeg";
import Shirt from "../res/cat-shirt.jpg";
import Jacket from "../res/cat-jacket.jpg";
import Jeans from "../res/cat-jeans.jpg";
import Bag from "../res/cat-backpack.jpg";
import Shoes from "../res/cat-shoes.jpg";
import Watch from "../res/cat-watch.jpg";
import Cap from "../res/cat-cap.jpg";
import All from "../res/cat-all.jpg";

function toCategory(category) {
    window.location.href = "/search/All/" + category
}

function HeroCategories() {
  return (
    <section id='heroCategories'>
        <span className='heroCategory' onClick={() => toCategory("Tshirts")}>
            <span className='heroCategoryImage' >
                <img src={TShirt} alt='hero-category-1' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>T-Shirts</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("Shirts")}>
            <span className='heroCategoryImage'>
                <img src={Shirt} alt='hero-category-1' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>Shirts</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("Jackets")}>
            <span className='heroCategoryImage'>
                <img src={Jacket} alt='hero-category-2' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>Jackets</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("Jeans")}>
            <span className='heroCategoryImage'>
                <img src={Jeans} alt='hero-category-2' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>Jeans</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("Bags")}>
            <span className='heroCategoryImage'>
                <img src={Bag} alt='hero-category-2' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>Bags</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("Shoes")}>
            <span className='heroCategoryImage'>
                <img src={Shoes} alt='hero-category-2' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>Shoes</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("Watches")}>
            <span className='heroCategoryImage'>
                <img src={Watch} alt='hero-category-2' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>Watches</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("Caps")}>
            <span className='heroCategoryImage'>
                <img src={Cap} alt='hero-category-2' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>Caps</span>
            </span>
        </span>
        <span className='heroCategory' onClick={() => toCategory("All")}>
            <span className='heroCategoryImage'>
                <img src={All} alt='hero-category-2' />
                <span className='filter'/>
            </span>
            <span className='heroCategoryText'>
                <span className='heroCategoryTitle'>All</span>
            </span>
        </span>
    </section>
  )
}

export default HeroCategories