import React from 'react'
import "./css/Home.css"

import Hero from "./components/Hero"
import FlashSale from "./components/FlashSale"
import TodayForYou from "./components/TodayForYou"
import CTA from "./components/CTA"

function Home() {
  return (
    <section id='home'>
        <Hero />
        <FlashSale />
        <TodayForYou />
        <CTA />
    </section>
  )
}

export default Home