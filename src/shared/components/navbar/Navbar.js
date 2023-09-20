import React,{useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import '../../css/navbar.css'

import LogoBlack from "../../res/logo/zenithbasics-high-resolution-logo-black-on-transparent-background.png"
import Search from "../../res/svg/magnifying-glass-solid.svg"
import Cart from "../../res/svg/cart-shopping-solid.svg"
import Notifications from "../../res/svg/bell-solid.svg"
import Chevron from "../../res/svg/chevron-down-solid.svg"
import Delete from "../../res/svg/x-solid.svg"

function search() {
    const search = document.getElementById('search').value;
    const searchCategory = document.getElementById('searchCategories').getAttribute("value");
    if(searchCategory === 'all'){
        window.location.href = `/search/${search}`
    }else{
        window.location.href = `/search/${search}/${searchCategory}`
    }
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter' && document.activeElement.id === 'search') {
        search()
        closeCategoryOptions()
    } else if(event.key === 'Enter' && document.activeElement.id === 'categorySelect') {
        closeCategoryOptions()
        search()

    }
});

function closeCategoryOptions(){
    const categoryOptions = document.getElementById('searchCategoryOptions');
    categoryOptions.style.display = 'flex'
}

function toggleCategoryOptions() {
    const categoryOptions = document.getElementById('searchCategoryOptions');
    if(categoryOptions.style.display === 'none' || categoryOptions.style.display === ''){
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
    closeCategoryOptions()
}


function Navbar({user,siteData, product}) {
    const cartRef = useRef(null);
    const cartImgRef = useRef(null);
    const notificationsRef = useRef(null);
    const notificationsImgRef = useRef(null);

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        fetch(`${process.env.REACT_APP_APIURL}/product/`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        });
    }


    function openNotifications() {
        notificationsImgRef.current.classList.toggle("tabOpen")
        notificationsRef.current.classList.toggle("tabOpen")
    }

    function openCart() {
        cartImgRef.current.classList.toggle("tabOpen")
        cartRef.current.classList.toggle("tabOpen")
    }

    document.addEventListener('click', function(event) {
        const isClickInside = cartRef.current.contains(event.target) || cartImgRef.current.contains(event.target) || notificationsRef.current.contains(event.target) || notificationsImgRef.current.contains(event.target);
        const isImgs = cartImgRef.current.contains(event.target) || notificationsImgRef.current.contains(event.target);
        const tabsOpen = cartRef.current.classList.contains("tabOpen") || notificationsRef.current.classList.contains("tabOpen")

        if (!isClickInside) {
            notificationsRef.current.classList.remove("tabOpen")
            notificationsImgRef.current.classList.remove("tabOpen")
            cartRef.current.classList.remove("tabOpen")
            cartImgRef.current.classList.remove("tabOpen")
        }
    });

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
            <span >
                <img className='svgMed' src={Notifications} ref={notificationsImgRef} onClick={(e) => openNotifications(e)} />
                {user && user.notifications.length != 0 ? <span className='itemCount'>{user.notifications.length}</span> : null}
                <div id='notifications' ref={notificationsRef}>
                    <div className='head' id='notificationHead'>
                        <h3>Notifications</h3>
                    </div>
                    <div className='body'>
                        {(user && user.notifications.length != 0) ? 
                        user.notifications.map((notification, index) => {
                            return (
                                <div key={index} className='notification'>
                                    <p>{notification.message}</p>
                                </div>
                            )
                        }) : <p>No New Notifications</p>}
                    </div>

                </div>
            </span>
            <span >
                <img className='svgMed' src={Cart} ref={cartImgRef} onClick={(e) => openCart(e)}/>
                {user && user.cart.length != 0 ? <span className='itemCount'><p>{user.cart.length}</p></span> : null}
                <div id='cart' ref={cartRef}>
                    <div className='head' id='cartHead'>
                        <h3>Cart</h3>
                    </div>
                    <div className='body'>
                        <div className='cartItems'>
                            {((user && products) && user.cart.length != 0) ? 
                            user.cart.map((cartItem, index) => {
                                let product;
                                products && products.forEach((productItem) => {
                                    if(productItem._id === cartItem.productId){
                                        product = productItem
                                    }
                                })
                                return (
                                    <div key={index} className='cartItem'>
                                        <div className='cartImage'>
                                            <img src={product.images[0]} />
                                        </div>
                                        <div className='cartInfo'>
                                            <p>{product.productName}</p>
                                            <div className='cartItemPriceContainer'>
                                                <p>{cartItem.quantity > 1 ? cartItem.quantity + " x ":null}${product.productPrice}</p>
                                                {cartItem.quantity > 1 ? <p>${cartItem.quantity * product.productPrice}</p> : null}
                                            </div>
                                        </div>
                                        <div className='cartItemButtons'>
                                            <button className='cartItemButton'><img src={Delete} /></button>
                                        </div>
                                    </div>
                                )
                            }) : <p>Cart Is Empty</p>}
                        </div>
                        <div className='cartBottom'>
                            <div className='cartTotal'>
                                {user && products && user.cart.length != 0 ? 
                                <>
                                    <p>Total:</p>
                                    <p>${user.cart.reduce((total, cartItem) => {
                                        let product;
                                        products.forEach((productItem) => {
                                            if(productItem._id === cartItem.productId){
                                                product = productItem
                                            }
                                        })
                                        return total + (cartItem.quantity * product.productPrice)
                                    }, 0)}</p>
                                </> : null}
                            </div>
                            {user && products && user.cart.length != 0 ?
                            <Link to='/cart' className='cartButton'>View Cart</Link> : null
                            }
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </nav>
  )
}

export default Navbar