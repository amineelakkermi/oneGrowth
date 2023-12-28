import React from 'react'
import './plans.css'
import AboutButton from '../aboutButton/AboutButton'
import { air, clipboard, light, verified } from '../../assets'


const plansItems = [
    {
    icons : clipboard,
    title : "Basic",
    text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo.",
    price : "$5.9",
    verfied : verified,
    options1 : "Technical SEO",
    options2 : "Search Marketing ",
    options3 : "Link Building",
    },
    {
    icons : light,
    title : "Standard",
    text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo.",
    price : "$17.9",
    verfied : verified,
    options1 : "Content Strategy",
    options2 : "Google Analytics",
    options3 : "Conversion Booster",
    },
    {
    icons : air,
    title : "Expert",
    text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo.",
    price : "29.9$",
    verfied : verified,
    options1 : "Pay Per Click",
    options2 : "Digital Marketing",
    options3 : "Website Design",
    },
]

const Plans = () => {
  return (
    <section className='flex-column-section plans-section'>
    <AboutButton content="Pricing Plan" />
    
    <div className="plans-container">
    {
    plansItems.map((item , index) => (
    <div className="plans-card-container">
    <div className="div-icons">
    <img src={item.icons} alt="icons"/>
    </div>
    <h4>{item.title}</h4>
    <p>{item.text}</p>
    <p><span>{item.price}</span> MONTH</p>

    <div className='options-div'>
    <img src={verified} alt="verified" />
    <p>{item.options1}</p>
    </div>

    <div className='options-div'>
    <img src={verified} alt="verified" />
    <p>{item.options2}</p>
    </div>
    
    <div className='options-div'>
    <img src={verified} alt="verified" />
    <p>{item.options3}</p>
    </div>
    </div>
    ))
    }
    </div>

    <div className="start-div">
    <h1 className="start">
    Let's Start Working Together.
    </h1>
    <h1><span>Get in Touch</span> with Us!</h1>
    </div>
   
    </section>
  )
}

export default Plans