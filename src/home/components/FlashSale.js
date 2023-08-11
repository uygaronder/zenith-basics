import React from 'react'
import "../css/FlashSale.css"

import SaleIcon from "../../shared/res/svg/tag-solid.svg"

import Product from "../../shared/components/product/Product"

const product ={
  renderType: "sale",
  productID: 1,
  name: "Product Name",
  price: 100,
  description: "Product Description",
  image: require("../../home/res/cat-backpack.jpg"),
  onSale: true,
  liked: false,
  sale:{
      saleType: "flashSale",
      discountedPrice: 70,
      sold: 121,
      stock: 300,
  }
}

const productLiked ={
  renderType: "sale",
  productID: 1,
  name: "Product Name",
  price: 100,
  description: "Product Description",
  image: require("../../home/res/cat-backpack.jpg"),
  onSale: true,
  liked: true,
  sale:{
      saleType: "flashSale",
      discountedPrice: 70,
      sold: 121,
      stock: 300,
  }
}

function Sale() {
  return (
    <section id='flashSale'>
      <div className='saleUpper'>
          <div className='saleInfo'>
              <span className='saleIcon'>
                  <img className='svgLarge' src={SaleIcon} />
              </span>
              <h3>Flash Sale!</h3>
              <span className='saleTimer'>
                <span>02</span>
                <div>:</div>
                <span>11</span>
                <div>:</div>
                <span>42</span>
              </span>
          </div>
          <div id='saleArrows'>
            <span className='saleArrow'>
              <div className='arrow toLeft'>
                <div></div>
                <span></span>
                <span></span>
              </div>
            </span>
            <span className='saleArrow available'>
              <div className='arrow toRight'>
                <div></div>
                <span></span>
                <span></span>
              </div>
            </span>
          </div>
      </div>
      <div id='saleProducts'>
        <Product product={product} />
        <Product product={product} />
        <Product product={productLiked} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </section>
  )
}

export default Sale