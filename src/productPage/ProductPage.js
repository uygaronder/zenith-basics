import React,{useState, useEffect} from 'react'

import Product from "./components/Product"
import ProductDetails from "./components/ProductDetails"
import ProductReviews from "./components/ProductReviews"
import ProductsSlider from "../home/components/ProductSlider"
import Loading from '../shared/components/loading/Loading'

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



function ProductPage({user, siteData}) {
  const [product, setProduct] = useState(null);
  const [loading , setLoading] = useState(true);

  function fetchProduct() {
    fetch(`${process.env.REACT_APP_APIURL}/product/${window.location.pathname.split("/")[2]}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setProduct(data);
      console.log(data);
      setLoading(false);
    });
  }
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
        {loading ? <Loading /> : <>
        <Product product={product} user={user}/>
        <ProductDetails product={product}/>
        <ProductReviews reviews={reviews} />
        {/**
         *  <ProductsSlider site={siteData} type={"best"} products={[]} />
         */}
        </>}
    </>
  )
}

export default ProductPage