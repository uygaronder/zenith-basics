import React from 'react'

import "../css/ProductDetails.css"

function ProductDetails({product}) {
  return (
    <section id='productDetails'>
        <div id='productDetailsUpper'>
            <div id='detailTabButtons'>
                <span className='detailTabButton'>
                    <span className='detailTabButtonText'>Description</span>
                </span>
            </div>
        </div>
        <div id='productTabs'>
            <div id='description' className='productTab'>
                <h3>Product Details</h3>
                <div id='descriptionText'>
                    <p>{product.description}</p>
                </div>
                <div id='features'>
                    {product.aboutItems.map((feature, index) => {
                        return(
                            <div className='feature' key={index}>
                                <p>{feature}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails