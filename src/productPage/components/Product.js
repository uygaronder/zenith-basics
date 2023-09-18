import React from 'react'

import "../css/Product.css"

import Star from "../../shared/res/svg/star-solid.svg";
import Heart from "../../shared/res/svg/heart-regular.svg";

function Product({product, user}) {
    //console.log(product)
    //console.log(user)
    const addToCart = () => {
        const onCart = user.cart.find(cartItem => cartItem.product._id === product._id)
        fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                product: product._id,
                quantity: onCart?onCart.quantity+1:1
            }
        })
    }

    const addToWishlist = () => {
        const onWishlist = user.wishlist.find(wishlistItem => wishlistItem.product._id === product._id)
        fetch(`${process.env.REACT_APP_API_URL}/wishlist/add`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                product: product._id,       
            }
        })
    }

    const buyNow = () => {
        console.log(user)
        const onCart = user.cart.find(cartItem => cartItem.product._id === product._id)
        fetch(`${process.env.REACT_APP_API_URL}/cart/add`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                product: product._id,
                quantity: onCart?onCart.quantity+1:1
            }
        }).then(() => {
            window.location.href = "/cart"
        }
        )
    }


  return (
    <section id='productContainer'>
        <span id='productUp'>
            <span id='category'>Category</span>
        </span>
        <div id='product'>
            <div id='productImagesContainer'>
                <div id='productImages'>
                    {product.images.map((image, index) => {
                        return(
                            <div className='productImage' key={index}>
                                <img src={image} alt={product.productName} />
                            </div>
                        )
                    })}
                </div>
                <div id='highlightedImage'>
                    <img src={product.images[0]} alt={product.productName} />
                </div>
            </div>
            <div id='productInfo'>
                <span id='productName'>{product.productName}</span>
                <div id='productRatingsContainer'>
                    <span id='productSales'>{product.reviews.length >= 1000?parseInt(product.reviews.length/1000)+`K+`:parseInt(product.reviews.length/10)*10+`+`} Sold</span>
                    <span className='dotDivider' />
                    <span id='productRating'>
                        <span id='stars' style={{width:`${product.reviews.length*20}px`}}>
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                        </span>
                        <span id='rating'>{product.reviews.length}</span>
                    </span>
                    <span className='dotDivider' />
                    <span id='numberOfReviews'>{product.reviews.length} Reviews</span>
                </div>
                <div id='productPrice'>
                    <span id='price'>${product.sale.onSale?product.sale.salePrice:product.productPrice}</span>
                    {product.sale.onSale?<span id='saleIndicitor'><span id='originalPrice'>${product.productPrice}</span><span id='salePercantage'>{product.sale.discountPercentage}% off</span></span>:null}
                </div>
                {/**
                 * <div id='availableColors'>
                    {product.colors.map((color, index) => {
                        const className = index === 0?"availableColor selected":"availableColor"
                        return(
                            <div className={className} key={index}>
                                <img src={color.image} alt={color.name} />
                            </div>
                        )
                    }
                    )}
                </div>
                 */}
                
                <div id='availableSizes'>
                    <span id='sizeText'>Select Size</span>
                    <div id='sizes'>
                        <span className='size selected'>S</span>
                        <span className='size'>M</span>
                        <span className='size'>L</span>
                        <span className='size'>XL</span>
                        <span className='size unavailable'>2XL</span>
                    </div>
                </div>
                <div id='productButtons'>
                    <span id='buy' onClick={() => buyNow()}>
                        <span id='buyText' >Buy This Item</span>
                    </span>
                    <span id='cart' onClick={() => addToCart()}>
                        <span id='cartText'>Add To Cart</span>
                    </span>
                    <div id='productDownButtons'>
                        <span className='lineDivider' />
                        <span id='like' onClick={() => addToWishlist()}>
                            <img src={Heart} >
                            </img>
                            <span > Wishlist</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product