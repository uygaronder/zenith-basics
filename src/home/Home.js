import React, { useEffect, useState } from 'react'
import "./css/Home.css"

import Hero from "./components/Hero"
import ProductSlider from "./components/ProductSlider"
import ProductTabs from "./components/ProductTabs"
import CTA from "./components/CTA"

const fetchProducts = () => {
  fetch(`${process.env.REACT_APP_APIURL}/product`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  });
}

function Home() {
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    document.title = "Zenith - Home"
  }, [])

  return (
    <section id='home'>
        <Hero />
        <ProductSlider type={"flashSale"} />
        <ProductTabs />
        <CTA />
    </section>
  )
}

export default Home