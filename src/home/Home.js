import React, { useEffect, useState } from 'react'
import "./css/Home.css"

import Hero from "./components/Hero"
import ProductSlider from "./components/ProductSlider"
import ProductTabs from "./components/ProductTabs"
import CTA from "./components/CTA"

function Home() {
  const [ products, setProducts ] = useState([])
  const [ siteData, setSiteData ] = useState([])
  

  const fetchSiteData = () => {
    fetch(`${process.env.REACT_APP_APIURL}/site`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setSiteData(data);
    })
  }
  
  const fetchProducts = async () => {
    await fetch(`${process.env.REACT_APP_APIURL}/product/`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      setProducts(data);
    })
  }

  useEffect(() => {
    setProducts([])
    fetchProducts()
    fetchSiteData()
    document.title = "Zenith - Home"
  }, [])

  return (
    <section id='home'>
        <Hero />
        <ProductSlider type={"flashSale"} products={products} site={siteData}/>
        <ProductTabs products={products} site={siteData}/>
        <CTA />
    </section>
  )
}

export default Home