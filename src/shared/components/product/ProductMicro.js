import React from 'react'

import "../../css/ProductMicro.css"

import Heart from "../../res/svg/heart-solid.svg"
import Star from "../../res/svg/star-solid.svg"
import StarEmpty from "../../res/svg/star-regular.svg"

function ProductMicro({product, viewStyle}) {
    const filledStarsRef = React.useRef(null)

    let productClass = 'productMicro'
    if(viewStyle === 'list') {
        productClass = 'productMicro list'
    }else if (viewStyle === 'box') {
        productClass = 'productMicro box'
    }

    React.useEffect(() => {
        if(viewStyle === 'list') {
            const filledStars = filledStarsRef.current
            const filledStarsWidthPercentage = product.rating*20
            filledStars.style.width = filledStarsWidthPercentage + "%"
        }
    }, [])

    function toProduct(e) {
        while (e.target.getAttribute('productid') === null) {
            e.target = e.target.parentNode
        }
        const productID = e.target.getAttribute('productid')
        window.location.href = "/product/" + productID
    }
    return (
        <div className={productClass} productid={product.productID} onClick={(e) => toProduct(e)}>
            <div className='productImage'>
                <img src={product.image} />
                <span className='likeButton'>
                    <div className='heart'>
                        {product.liked ? <img className='svgSmall liked' src={Heart} /> : <img className='svgSmall' src={Heart} />}
                        
                    </div>
                </span>
            </div>
            <div className='productInfoContainer'>
                <h4 className='productName'>{product.name} {viewStyle == "list" && "- " + product.description}</h4>
                {product.renderType=="regular" ? <span className='productInfo'>
                    {viewStyle == "list" ? 
                    <div className='starContainer'>
                        <span className='starRating'>{product.rating}</span>
                        <div className='stars'>
                            <div ref={filledStarsRef} className='filledStars'>
                                <img className='svgSmall' src={Star} />
                                <img className='svgSmall' src={Star} />
                                <img className='svgSmall' src={Star} />
                                <img className='svgSmall' src={Star} />
                                <img className='svgSmall' src={Star} />
                            </div>
                            <div className='emptyStars'>
                                <img className='svgSmall' src={StarEmpty} />
                                <img className='svgSmall' src={StarEmpty} />
                                <img className='svgSmall' src={StarEmpty} />
                                <img className='svgSmall' src={StarEmpty} />
                                <img className='svgSmall' src={StarEmpty} />
                            </div>
                        </div>
                    </div> 
                    :
                    <div className='starContainer'>
                        <img className='svgSmall' src={Star} />
                        <span className='starRating'>4.4</span>
                    </div>}
                    <span className='dotDivider'></span>
                    <span className='productSold'>4K+ Sold</span>
                </span> : null}
                <div className='priceContainer'>
                    {product.sale.onSale ? <span className='productDiscount'><p className='dollarSign'>$</p><p>{product.sale.discountedPrice}</p></span> : null}
                    {product.sale.onSale ? <span className='productPrice onDiscount'><p className='dollarSign'>$</p><p>{product.price}</p></span> : <span className='productPrice'><p className='dollarSign'>$</p><p>{product.price}</p></span>}
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