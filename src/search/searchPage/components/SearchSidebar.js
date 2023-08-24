import React from 'react'

import "../css/SearchSidebar.css"

import Star from "../../../shared/res/svg/star-solid.svg"
import StarOutline from "../../../shared/res/svg/star-regular.svg"

function SearchSidebar() {
  return (
    <section id='searchSidebar'>
        <div className='section'>
            <h3>Department</h3>
            <p className='department'>Link</p>
            <p className='subDepartment'>Link</p>
            <p className='department'>Link</p>
        </div>
        <div className='section'>
            <h3>Customer Rating</h3>
            <p className='rating'>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
            <p className='rating'>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
            <p className='rating'>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
            <p className='rating'>
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
        </div>
        <div className='section'>
            <h3>Price</h3>
            <p className='price'>Under 25$</p>
            <p className='price'>25$ to 50$</p>
            <p className='price'>50$ to 100$</p>
            <p className='price'>100$ to 200$</p>
            <p className='price'>200$ & Above</p>
            <div id='priceBetweenContainer'>
                <input type='number' placeholder='$ Min' />
                <input type='number' placeholder='$ Max' />
                <button>Go</button>
            </div>
        </div>
    </section>
  )
}

export default SearchSidebar