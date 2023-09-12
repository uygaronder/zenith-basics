import React, { useEffect } from 'react'
import "./css/Home.css"

import Hero from "./components/Hero"
import ProductSlider from "./components/ProductSlider"
import ProductTabs from "./components/ProductTabs"
import CTA from "./components/CTA"

function Home() {

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