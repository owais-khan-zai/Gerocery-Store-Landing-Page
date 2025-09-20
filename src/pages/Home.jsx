import React, { useEffect, useState } from 'react'
import Navbar from '../utilities/Navbar'
import HeroSection from '../pages/HeroSection'
import FeaturedSection from '../pages/FeaturedSection'
import PopularProducts from './PopularProducts'
import DailySells from './DailySellsSection'
import DealDaySection from './DealDaySection'
import Footer from './Footer'
import ContactSection from './ContactSection'
import ProductCategory from './ProductCategory'
import StartAni from './popup'
import Loader from '../utilities/Loader'

const Home = () => {

  return (
    <div>
      <StartAni/>
      <Navbar/>
      <HeroSection/>
      <FeaturedSection />
      <PopularProducts />
      <DailySells/>
      <DealDaySection/>
      <ProductCategory/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home
