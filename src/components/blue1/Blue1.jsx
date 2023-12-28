import React from 'react'
import './blue1.css'
import { manager, map } from '../../assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../motion'




const Blue1 = ({ title , paragraph}) => {
  return (
    <section className='blue'>
        <div className="heading-part">
        <motion.h2
        variants={fadeIn('right' , 'spring' , 1 , 3)}
        initial="hidden"
        animate="show">{title}
        </motion.h2>
        <motion.div
        variants={fadeIn('left' , 'spring' , 1 , 3)}
        initial="hidden"
        animate="show"
        className='text-contact'>
        <p
        >{paragraph}</p>
        <button>
        <a href="#">Contact Us</a>
        </button>
        </motion.div>
       
       
        </div>
        <div className="blue-second-part">
        <div className="blue-img-container">
        <img src={map} alt="map" />
        </div>
        <div className="blue-img-container">
        <img src={manager} alt="manager" />
        </div>
        </div>
    </section>
  )
}

export default Blue1