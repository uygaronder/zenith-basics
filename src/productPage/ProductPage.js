import React from 'react'

import Product from "./components/Product"
import ProductDetails from "./components/ProductDetails"
import ProductReviews from "./components/ProductReviews"

const product ={
  renderType: "sale",
  productID: 1,
  name: "Product Name",
  price: 100,
  image: require("./../home/res/cat-backpack.jpg"),
  onSale: true,
  liked: true,
  details: {
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur",
    other: [
      {title: "Material", value: "Cotton"},
      {title: "Size Fit", value: "Regular"},
      {title: "Wash", value: "Machine Wash"},
    ]
  },
  sale:{
      saleType: "flashSale",
      discountedPrice: 70,
      discountPercentage: 30,
      sold: 121,
      stock: 300,
  },
  ratings: {
      rating: 4.4,
      numberOfRatings: 100,
      numberOfReviews: 50,
      numberOfSales: 2304,
  },
  colors: [
  {
    name: "black",
    image: require("./../home/res/cat-backpack.jpg"),
    sizes: ["S", "M","L" ], 
  },
  {
    name: "Red",
    image: require("./../home/res/cat-backpack.jpg"),
    sizes: ["S", "L", "XL"], 
  },
   {
    name: "blue",
    image: require("./../home/res/cat-backpack.jpg"),
    sizes: ["S", "M", "L"], 
  },
  {
    name: "green",
    image: require("./../home/res/cat-backpack.jpg"),
    sizes: [ "M", "L", "XL"], 
  },
  ]
}


function ProductPage() {
  return (
    <>
        <Product product={product}/>
        <ProductDetails product={product}/>
        <ProductReviews product={product} />
    </>
  )
}

export default ProductPage