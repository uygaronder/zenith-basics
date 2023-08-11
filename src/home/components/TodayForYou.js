import React from 'react'

import "../css/TodayForYou.css";

import Product from "../../shared/components/product/Product";

const product ={
    renderType: "regular",
    productID: 1,
    name: "Product Name",
    price: 100,
    description: "Product Description",
    image: require("../../home/res/cat-backpack.jpg"),
    onSale: false,
    liked: false,
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
        saleType: "flashSale",
        discountedPrice: 70,
        sold: 121,
        stock: 300,
    }
}

const productLiked ={
    renderType: "regular",
    productID: 1,
    name: "Product Name",
    price: 100,
    description: "Product Description",
    image: require("../../home/res/cat-backpack.jpg"),
    onSale: false,
    liked: true,
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
                <Product product={product} />
                <Product product={productSale} />
                <Product product={productLiked} />
                <Product product={productSale} />
                <Product product={product} />
                <Product product={product} />
                <Product product={productSale} />
                <Product product={product} />
            </div>
            <div id='newArrivals'>
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
            <div id='specialDiscount'>
                <Product product={productSale} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={productSale} />
            </div>
        </div>
    </section>
  )
}

export default TodayForYou