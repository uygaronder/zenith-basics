import React from 'react'

import "../css/TodayForYou.css";

import ProductMicro from "../../shared/components/product/ProductMicro";

const product ={
    renderType: "regular",
    productID: 1,
    name: "Product Name2",
    price: 100,
    description: "Product Description",
    image: require("../../home/res/cat-backpack.jpg"),
    liked: false,
    sale:{
        onSale: true,
        saleType: "none",
        discountedPrice: 70,
        sold: 121,
        stock: 300,
    }
}

const productSale ={
    renderType: "regular",
    productID: 1,
    name: "Product Name",
    price: 100,
    description: "Product Description",
    image: require("../../home/res/cat-backpack.jpg"),
    onSale: true,
    liked: false,
    sale:{
        saleType: "none",
        discountedPrice: 70,
        sold: 121,
        stock: 300,
    }
}

const productLiked ={
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

function TodayForYou() {
  return (
    <section id='todayForYou'>
        <div id='forYouUpper'>
            <h3>Todays For You!</h3>
            <div id='upperButtons'>
                <span className='active'>Best Seller</span>
                <span>New Arrivals</span>
                <span>Special Discount</span>
            </div>
        </div>
        <div id='forYourProductsContainer'>
            <div id='bestSeller'>
                <ProductMicro product={product} />
                <ProductMicro product={productSale} />
                <ProductMicro product={productLiked} />
                <ProductMicro product={productSale} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={productSale} />
                <ProductMicro product={product} />
            </div>
            <div id='newArrivals'>
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
            </div>
            <div id='specialDiscount'>
                <ProductMicro product={productSale} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={product} />
                <ProductMicro product={productSale} />
            </div>
        </div>
    </section>
  )
}

export default TodayForYou