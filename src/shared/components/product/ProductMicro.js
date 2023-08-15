import React from 'react'

import "../../css/ProductMicro.css"

import Heart from "../../res/svg/heart-solid.svg"
import Star from "../../res/svg/star-solid.svg"

function ProductMicro({product}) {
    return (
        <div className='productMicro'>
            <div className='productImage'>
                <img src={product.image} />
                <span className='likeButton'>
                    <div className='heart'>
                        {product.liked ? <img className='svgSmall liked' src={Heart} /> : <img className='svgSmall' src={Heart} />}
                        
                    </div>
                </span>
            </div>
            <div className='productInfoContainer'>
                <h4 className='productName'>{product.name}</h4>
                {product.renderType=="regular" ? <span className='productInfo'>
                    <div className='starContainer'>
                        <img className='svgSmall' src={Star} />
                        <span className='starRating'>4.4</span>
                    </div>
                    <span className='dotDivider'></span>
                    <span className='productSold'>4K+ Sold</span>
                </span> : null}
                <div className='priceContainer'>
                    {product.sale.onSale ? <span className='productDiscount'>${product.sale.discountedPrice}</span> : null}
                    {product.sale.onSale ? <span className='productPrice onDiscount'>${product.price}</span> : <span className='productPrice'>${product.price}</span>}
                </div>
                
            </div>
            {product.sale&&product.sale.saleType == "flashSale" ? <span className='flashSaleCount'>
                <span className='bar'>
                    <span className='progress' style={{width: product.sale.sold/product.sale.stock*100 + "%"}}></span>
                </span>
                <span className='count'>{product.sale.sold}/{product.sale.stock} Sold</span>
            </span>:null}
        </div>
    )
}

export default ProductMicro