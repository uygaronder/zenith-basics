import React from 'react'

import "../css/TodayForYou.css";

import ProductMicro from "../../shared/components/product/ProductMicro";

const product ={
    renderType: "regular",
    productID: 1,
    name: "Product Name2",
    price: 100,
    rating: 3.8,
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
    rating: 4.2,
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
    rating: 4.8,
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

function switchTab(tabName){
    let bestSeller = document.getElementById("bestSeller");
    let newArrivals = document.getElementById("newArrivals");
    let specialDiscount = document.getElementById("specialDiscount");
    let upperButtons = document.getElementById("upperButtons");
    let buttons = upperButtons.getElementsByTagName("span");
    let tabTitle = document.getElementById("tabTitle");
    let forYourProductsContainer = document.getElementById("forYourProductsContainer");

    switch (tabName) {
        case "bestSellers":
            buttons[0].classList.add("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.remove("active");
            tabTitle.innerHTML = "Todays For You!";
            forYourProductsContainer.style.transform = "translateX(0%)";
            break;
        case "newArrivals":
            buttons[0].classList.remove("active");
            buttons[1].classList.add("active");
            buttons[2].classList.remove("active");
            tabTitle.innerHTML = "New Arrivals";
            forYourProductsContainer.style.transform = "translateX(-100%)";
            break;
        case "specialDiscount":
            buttons[0].classList.remove("active");
            buttons[1].classList.remove("active");
            buttons[2].classList.add("active");
            tabTitle.innerHTML = "Special Discount";
            forYourProductsContainer.style.transform = "translateX(-200%)";
            break;
        default:
            break;

}}


function ProductTabs({site, products}) {
    const newArrivals = products.filter(product => product.sale.sold < 100);
    let specialDiscount = products.filter(product => product.sale.onSale);
    specialDiscount = specialDiscount.splice(0, 8);

    const bestSellerIds = products.map(product => product.id);
    let bestSellers = products.filter(product => bestSellerIds.includes(product.id));
    bestSellers = bestSellers.splice(0, 8);

    const newArrivalsIds = products.map(product => product.id);
    let newArrivalsProducts = products.filter(product => newArrivalsIds.includes(product.id));
    newArrivalsProducts = newArrivalsProducts.splice(newArrivalsProducts.length - 8, newArrivalsProducts.length - 1);
    


  return (
    <section id='todayForYou'>
        <div id='forYouUpper'>
            <h3 id='tabTitle'>Todays For You!</h3>
            <div id='upperButtons'>
                <span className='active' onClick={() => switchTab("bestSellers")}>Best Seller</span>
                <span onClick={() => switchTab("newArrivals")}>New Arrivals</span>
                <span onClick={() => switchTab("specialDiscount")}>Special Discount</span>
            </div>
        </div>
        <div id='forYourProductsContainer'>
            <div id='bestSeller'>
                {bestSellers.map((product, index) => {
                    return (
                        <ProductMicro product={product} />
                    )
                })
                }
            </div>
            <div id='newArrivals'>
                {newArrivalsProducts.map((product, index) => {
                    return (
                        <ProductMicro product={product} />
                    )
                })
                }
            </div>
            <div id='specialDiscount'>
                {specialDiscount.map((product, index) => {
                    return (
                        <ProductMicro product={product} />
                    )
                })
                }
            </div>
        </div>
    </section>
  )
}

export default ProductTabs