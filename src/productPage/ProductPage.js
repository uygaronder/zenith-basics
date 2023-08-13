import React from 'react'

import Product from "./components/Product"
import ProductDetails from "./components/ProductDetails"
import ProductReviews from "./components/ProductReviews"
import ProductsSlider from "../home/components/ProductSlider"

const product ={
  renderType: "sale",
  productID: 1,
  name: "Product Name4",
  price: 100,
  image: require("./../home/res/cat-backpack.jpg"),
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
      onSale: true,
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

const reviews = {
  productID: 1,
  numberOfRatings: 200,
  rating: 4.3,
  ratingBreakdown: [
    {rating: 5, percentage: 50, numberOfRatings: 100},
    {rating: 4, percentage: 30, numberOfRatings: 60},
    {rating: 3, percentage: 10, numberOfRatings: 20},
    {rating: 2, percentage: 5, numberOfRatings: 10},
    {rating: 1, percentage: 1, numberOfRatings: 2},
  ],
  numberOfReviews: 60,
  reviews: [
    {
      name: "John Doe",
      rating: 4.5,
      date: "12/12/2020",
      productDetails:{
        size: "M",
        color: "Gray",
      },
      reviewTitle: "Lorem ipsum dolor",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewLikes: {
        numberOfLikes: 10,
        numberOfDislikes: 2,
      },
      images:[
        require("./../home/res/cat-backpack.jpg"),
      ]
    },
    {
      name: "Jane Doe",
      rating: 4.5,
      date: "12/12/2020",
      productDetails:{
        size: "M",
        color: "Black",
      },
      reviewTitle: "Lorem ipsum dolor",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      reviewLikes: {
        numberOfLikes: 0,
        numberOfDislikes: 0,
      },
      images:[
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
      ]
    },
    {
      name: "Jane Doe",
      rating: 4.5,
      date: "12/12/2020",
      productDetails:{
        size: "M",
        color: "Black",
      },
      reviewTitle: "Lorem ipsum dolor",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      reviewLikes: {
        numberOfLikes: 0,
        numberOfDislikes: 0,
      },
      images:[
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
      ]
    },
    {
      name: "Jane Doe",
      rating: 4.5,
      date: "12/12/2020",
      productDetails:{
        size: "M",
        color: "Black",
      },
      reviewTitle: "Lorem ipsum dolor",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      reviewLikes: {
        numberOfLikes: 0,
        numberOfDislikes: 0,
      },
      images:[
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
      ]
    },
    {
      name: "Eric Cartman",
      rating: 4,
      date: "12/12/2020",
      reviewTitle: "Lorem ipsum dolor",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewLikes: {
        numberOfLikes: 5,
        numberOfDislikes: 0,
      }
    },
    {
      name: "Butters Stotch",
      rating: 5,
      date: "12/12/2020",
      reviewTitle: "Lorem ipsum dolor",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewLikes: {
        numberOfLikes: 0,
        numberOfDislikes: 0,
      },
      images:[
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
        require("./../home/res/cat-backpack.jpg"),
      ]
    },
    {
      name: "Kenny McCormick",
      rating: 2,
      date: "12/12/2020",
      reviewTitle: "Lorem ipsum dolor",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reviewLikes: {
        numberOfLikes: 1,
        numberOfDislikes: 0,
      },
    },
  ]
}


function ProductPage() {
  return (
    <>
        <Product product={product}/>
        <ProductDetails product={product}/>
        <ProductReviews reviews={reviews} />
        <ProductsSlider type={"best"} />
    </>
  )
}

export default ProductPage