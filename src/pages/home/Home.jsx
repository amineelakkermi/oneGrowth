import React from 'react'
import './home.css'
import { AboutUs, Blue, Hero, Navbar } from '../../components'
import { laptop, map } from '../../assets'

const Home = () => {
  return (
   <div id='home'>
    <Hero title="Improve your Business with our Digital Marketing services" text="      Our goal is to make it as easy possible for you to walk away with the solution that suits your needs perfectly . Discover how we can transform your online presence"
    buttonContent1="Get Started"
    buttonContent2="Pricing"
    img={laptop}
    />
    <Blue title="Our services solve any business problem" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas vitae consequatur. Error, quas aliquid." />
    <AboutUs />
   </div>
  )
}

export default Home