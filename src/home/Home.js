import React from 'react'
import "./css/Home.css"

import Hero from "./components/Hero"
import FlashSale from "./components/FlashSale"
import TodayForYou from "./components/TodayForYou"
import CTA from "./components/CTA"
import Footer from "../shared/components/footer/Footer1"

function Home() {
  return (
    <section id='home'>
        <Hero />
        <FlashSale />
        <TodayForYou />
        <CTA />
        <Footer />
    </section>
  )
}

export default Home