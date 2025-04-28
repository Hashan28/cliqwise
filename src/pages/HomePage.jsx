import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import OurServices from '../components/OurServices'
import Banner from '../components/Banner'
import FAQ from '../components/FAQ'
import Packages from '../components/Packages'
import ReviewSection from '../components/ReviewSection'


const HomePage = () => {
  return (
    <div>
       <Hero
       heading="We Grow Hospitality Brands with Data-Driven" 
       heading2="with Data-Driven"
       paragraph="Experience the transformative power of our expert marketing strategies as we partner with you to elevate your brand's digital presence. Let us take your brand to new heights online. "
       showButton={true}/>
       <OurServices/>
       <Packages/>
       <Contact
       heading="Get In Touch"/>
      <Banner/>
      <ReviewSection/>
       
    </div>
  )
}

export default HomePage;