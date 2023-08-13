import React from 'react'
import "../css/ProductSlider.css"

import SaleIcon from "../../shared/res/svg/tag-solid.svg"

import ProductMicro from "../../shared/components/product/ProductMicro"

const product ={
  renderType: "sale",
  productID: 1,
  name: "Product Name1",
  price: 100,
  description: "Product Description",
  image: require("../../home/res/cat-backpack.jpg"),
  liked: false,
  sale:{
      onSale: true,
      saleType: "flashSale",
      discountedPrice: 70,
      sold: 121,
      stock: 300,
  }
}

const productRegular ={
  renderType: "regular",
  productID: 1,
  name: "Product Name2",
  price: 100,
  description: "Product Description",
  image: require("../../home/res/cat-backpack.jpg"),
  liked: false,
  sale:{
      onSale: false,
      saleType: "none",
      discountedPrice: 70,
      sold: 121,
      stock: 300,
  }
}

const productLiked ={
  renderType: "sale",
  productID: 1,
  name: "Product Name3",
  price: 100,
  description: "Product Description",
  image: require("../../home/res/cat-backpack.jpg"),
  liked: true,
  sale:{
      onSale: true,
      saleType: "flashSale",
      discountedPrice: 70,
      sold: 121,
      stock: 300,
  }
}

function ProductsSlider({type}) {
  return (
    <section id='productSlider'>
      <div className='saleUpper'>
          <div className='saleInfo'>
            {type === "flashSale" ? <><span className='saleIcon'>
                  <img className='svgLarge' src={SaleIcon} />
              </span>
              <h3>Flash Sale!</h3>
              <span className='saleTimer'>
                <span>02</span>
                <div>:</div>
                <span>11</span>
                <div>:</div>
                <span>42</span>
              </span></> : <><h3>Best Sellers</h3></>}
              
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
        {type === "flashSale" ? <>
        <ProductMicro product={product} />
        <ProductMicro product={product} />
        <ProductMicro product={productLiked} />
        <ProductMicro product={product} />
        <ProductMicro product={product} />
        <ProductMicro product={product} />
        <ProductMicro product={product} />
        <ProductMicro product={product} />
        </> : <>
        <ProductMicro product={productRegular}/>
        <ProductMicro product={productRegular}/>
        <ProductMicro product={productRegular}/>
        <ProductMicro product={productRegular}/>
        <ProductMicro product={productRegular}/>
        <ProductMicro product={productRegular}/>
        <ProductMicro product={productRegular}/>
        </>
        }
      </div>
    </section>
  )
}

export default ProductsSlider