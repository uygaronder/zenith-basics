import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/navbar.css'

import LogoBlack from "../../res/logo/zenithbasics-high-resolution-logo-black-on-transparent-background.png"
import Search from "../../res/svg/magnifying-glass-solid.svg"
import Cart from "../../res/svg/cart-shopping-solid.svg"
import Notifications from "../../res/svg/bell-solid.svg"
import Chevron from "../../res/svg/chevron-down-solid.svg"

function search() {
    const search = document.getElementById('search').value;
    const searchCategory = document.getElementById('categorySelect').value;
    if(searchCategory === 'all'){
        window.location.href = `/search/${search}`
    }else{
        window.location.href = `/search/${search}/${searchCategory}`
    }
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && document.activeElement.id === 'search') {
        search()
    } else if(event.key === 'Enter' && document.activeElement.id === 'categorySelect') {
        search()
    }
});

function toggleCategoryOptions() {
    const categoryOptions = document.getElementById('searchCategoryOptions');
    if(categoryOptions.style.display === 'none'){
        categoryOptions.style.display = 'flex'
    }else{
        categoryOptions.style.display = 'none'
    }
}

function selectCategory(event) {
    const selectedCategory = document.getElementById('selectedCategory');
    selectedCategory.innerHTML = event.target.innerHTML;
    const category = document.getElementById('searchCategories');
    category.setAttribute('value', event.target.getAttribute('value'));
    const categoryOptions = document.getElementById('searchCategoryOptions');
    categoryOptions.style.display = 'flex';
}


function Navbar() {
    return (
    <nav id='navbarMain'>
        <div className='navbar__logo'>
            <a href='/' className='logoLink'>
                <img className='logo' src={LogoBlack} alt='Zenith Basics Logo' />
            </a>
        </div>
        <div className='navbarSearch'>
            <span onClick={() => toggleCategoryOptions()} id='searchCategories' value="all">
                <p id='selectedCategory'>All</p>
                <span className='chevronDown'>
                    <img className='svgSmall' src={Chevron} alt='Chevron' />
                </span>
                <span id='searchCategoryOptions'>
                    <span className='category' onClick={(e) => selectCategory(e)} value="all">All</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="clothing">Clothing</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="accessories">Accessories</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="shoes">Shoes</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="belts">Belts</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="bags">Bags</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="watches">Watches</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="jewelry">Jewelry</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="sunglasses">Sunglasses</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="hats">Hats</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="scarves">Scarves</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="gloves">Gloves</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="socks">Socks</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="underwear">Underwear</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="swimwear">Swimwear</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="sleepwear">Sleepwear</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="sportswear">Sportswear</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="outerwear">Outerwear</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="suits">Suits</span>
                    <span className='category' onClick={(e) => selectCategory(e)} value="blazers">Blazers</span>
                </span>
            </span>
            <div className='searchBar'>
                <input type='text' name='search' id='search' placeholder='Search' />
            </div>
            <a className='searchButton' onClick={() => search()}>
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