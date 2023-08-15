import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/navbar.css'

import LogoBlack from "../../res/logo/zenithbasics-high-resolution-logo-black-on-transparent-background.png"
import Search from "../../res/svg/magnifying-glass-solid.svg"
import Cart from "../../res/svg/cart-shopping-solid.svg"
import Notifications from "../../res/svg/bell-solid.svg"

function Navbar() {
    return (
    <nav id='navbarMain'>
        <div className='navbar__logo'>
            <a href='/' className='logoLink'>
                <img className='logo' src={LogoBlack} alt='Zenith Basics Logo' />
            </a>
        </div>
        <div className='navbarSearch'>
            <select name='searchType' id='categorySelect' >
                <option value=''>All</option>
                <option value=''>All but longer</option>
            </select>
            <div className='searchBar'>
                <input type='text' name='search' id='search' placeholder='Search' />
            </div>
            <a className='searchButton'>
                <img className='svgSmall' src={Search} alt='Search' />
            </a>
        </div>
        <div className='navbarNotifications'>
            <span>
                <img className='svgMed' src={Notifications} />
            </span>
            <span>
                <img className='svgMed' src={Cart} />
            </span>
        </div>
    </nav>
  )
}

export default Navbar