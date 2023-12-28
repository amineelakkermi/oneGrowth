import React from 'react'
import './aboutSection.css'
import AboutButton from '../aboutButton/AboutButton'
import { keyboard } from '../../assets'
import { motion } from 'framer-motion'
import { fadeIn, textContainer, textVariant2 } from '../motion'

const AboutSection = () => {
  return (
    <section className='flex-column-section'>
    <AboutButton content="About Us" />
   
    <motion.div
    variants={textContainer}
    initial="hidden"
    animate="show"
    className="section-info-complet">
    <motion.h1
    variants={textVariant2}
    >We do great things together</motion.h1>
    <motion.p
    variants={textVariant2}
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, labore explicabo <br />doloribus temporibus dolor quos.</motion.p>
    </motion.div>

    <div className="section-img-complet">
    <motion.div
    variants={fadeIn('left' , 'spring' , 0.1 , 3)}
    initial="hidden"
    animate="show"
    className="img-container-complet">
    <img src={keyboard} alt="keyboard" />
    </motion.div>
    </div>
    


    </section>
  )
}

export default AboutSection