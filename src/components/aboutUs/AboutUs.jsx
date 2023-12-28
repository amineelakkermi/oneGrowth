import React from 'react'
import './aboutUs.css'
import { manager } from '../../assets'
import AboutButton from '../aboutButton/AboutButton'
import { motion } from "framer-motion"
import { fadeIn } from '../motion'

const AboutUs = () => {
  return (
    <section className='section-reverse' >
    <motion.div
    variants={fadeIn('left' , 'spring' , 1 , 3)}
    initial="hidden"
    whileInView="show"
    className="section-info">
    <AboutButton content="About us" />
    <h2 className='white'>We Offer Proffesional SEO <br /> Services For 26+ Years</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit voluptatibus obcaecati eum, accusamus enim dicta veniam explicabo aperiam ad nam iste maxime a tempore aspernatur tenetur ab natus totam vero.</p>
    <div className="liste-options">
    <ul className='liste-options-ul'>
      <div className='verified'>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-check" viewBox="0 0 16 16">
      <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
      </svg>
      <li>High Ang Analyzing</li>
      </div>
        <div className='verified'>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-check" viewBox="0 0 16 16">
        <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
        </svg>
        <li>Updated With Trend</li>
        </div>
    </ul>
    <ul className='liste-options-ul'>
      <div className='verified'>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-check" viewBox="0 0 16 16">
      <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
      </svg>
      <li>Technical & Creative Expertise</li>
      </div>
      <div className='verified'>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-file-check" viewBox="0 0 16 16">
      <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
      <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
      </svg>
      <li>Marketing Management</li>
      </div>
    </ul>
    </div>
    <button className='learn-more'>
    <a href="#">Learn More</a>
    </button>
    </motion.div>

    <div className="section-img">
    <motion.div
    variants={fadeIn('right' , 'spring' , 1 , 3)}
    initial="hidden"
    whileInView="show"
    className="img-container-reverse">
    <img className='manager' src={manager} alt="manager" />
    </motion.div>
    </div> 
    </section>
  )
}

export default AboutUs