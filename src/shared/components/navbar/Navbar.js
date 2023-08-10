import React from 'react'
import '../../css/navbar.css'

import Search from "../../res/svg/magnifying-glass-solid.svg"

function Navbar() {
  return (
    <nav id='navbarMain'>
        <div className='navbar__logo'>
            <a href='/'>
                <img src='' alt='Zenith Basics Logo' />
            </a>
        </div>
        <div className='navbarSearch'>
            <select name='searchType' id='searchType'>
                <option value=''>All Categories</option>
            </select>
            <div className='searchBar'>
                <span>
                    <img className='svgSmall' src={Search} alt='Search' />
                </span>
                <input type='text' name='search' id='search' placeholder='Search' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar