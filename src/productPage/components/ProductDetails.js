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
                    <p>{product.details.description}</p>
                </div>
                <div id='features'>
                    {product.details.other.map((feature, index) => {
                        return(
                            <div className='feature' key={index}>
                                <h4>{feature.title}</h4>
                                <span>:</span>
                                <p>{feature.value}</p>
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