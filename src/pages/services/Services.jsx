import React from 'react'
import './services.css'
import { Hero, Blue, AboutUs, Transform, Plans } from '../../components'
import { laptop, map } from '../../assets'

const Services = () => {
  return (
    <div> 
    <Hero title="Improve your Business with our Digital Marketing services" 
    text="Our goal is to make it as easy possible for you to walk away with the solution that suits your needs perfectly . Discover how we can transform your online presence"
    buttonContent1="Contact Us"
    buttonContent2="Pricing"
    img={map}
    />
    <Blue title="Our services solve any business problem" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas vitae consequatur. Error, quas aliquid." />
    <Transform />
    <Plans />

   
    </div>
  )
}

export default Services