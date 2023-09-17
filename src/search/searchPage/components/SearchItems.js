import React from 'react'

import "../css/SearchItems.css"

import ProductMicro from '../../../shared/components/product/ProductMicro'

const product ={
  renderType: "regular",
  productID: 1,
  name: "Product Name1",
  price: 100,
  rating: 4.5,
  description: "Product Descriptioroduct Descriptioroduct Descriptioroduct Descriptioroduct Descriptioroduct Descriptioroduct Description ",
  image: require("../../../home/res/cat-backpack.jpg"),
  liked: false,
  sale:{
      onSale: false,
      saleType: "none",
      discountedPrice: 70,
      sold: 121,
      stock: 300,
  }
}

function SearchItems({listStyle, sort, filters, items}) {
  const listClass = listStyle === 'list' ? 'listView' : 'boxView'
  return (
    <section id='searchItems' className={listClass}>
      <div id='items'>
        {items.map((item, index) => {
          return <ProductMicro key={index} product={item} viewStyle={listStyle}/>
        })
        }
      </div>
    </section>
  )
}

export default SearchItems