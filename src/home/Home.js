import React from 'react'
import "./css/Home.css"

import Hero from "./components/Hero"
import ProductSlider from "./components/ProductSlider"
import TodayForYou from "./components/TodayForYou"
import CTA from "./components/CTA"

function Home() {
  return (
    <section id='home'>
        <Hero />
        <ProductSlider type={"flashSale"} />
        <TodayForYou />
        <CTA />
    </section>
  )
}

export default Home