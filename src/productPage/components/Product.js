import React from 'react'

import "../css/Product.css"

import Star from "../../shared/res/svg/star-solid.svg";
import Heart from "../../shared/res/svg/heart-regular.svg";

function Product({product}) {
  return (
    <section id='productContainer'>
        <span id='productUp'>
            <span id='category'>Category</span>
        </span>
        <div id='product'>
            <div id='productImagesContainer'>
                <div id='productImages'>
                    <div className='productImage'>
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div id='highlightedImage'>
                    <img src={product.image} alt={product.name} />
                </div>
            </div>
            <div id='productInfo'>
                <span id='productName'>{product.name}</span>
                <div id='productRatingsContainer'>
                    <span id='productSales'>{product.ratings.numberOfSales >= 1000?parseInt(product.ratings.numberOfSales/1000)+`K+`:parseInt(product.ratings.numberOfSales/10)*10+`+`} Sold</span>
                    <span className='dotDivider' />
                    <span id='productRating'>
                        <span id='stars' style={{width:`${product.ratings.rating*20}px`}}>
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                        </span>
                        <span id='rating'>{product.ratings.rating}</span>
                    </span>
                    <span className='dotDivider' />
                    <span id='numberOfReviews'>{product.ratings.numberOfReviews} Reviews</span>
                </div>
                <div id='productPrice'>
                    <span id='price'>${product.onSale?product.sale.discountedPrice:product.price}</span>
                    {product.onSale?<span id='saleIndicitor'><span id='originalPrice'>${product.price}</span><span id='salePercantage'>{product.sale.discountPercentage}% off</span></span>:null}
                </div>
                <div id='availableColors'>
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
                    <span id='buy'>
                        <span id='buyText'>Buy This Item</span>
                    </span>
                    <span id='cart'>
                        <span id='cartText'>Add To Cart</span>
                    </span>
                    <div id='productDownButtons'>
                        <span className='lineDivider' />
                        <span id='like'>
                            <img src={Heart} >

                            </img>
                            <span>Wishlist</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product