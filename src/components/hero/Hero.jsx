import React from 'react'
import './hero.css'
import { laptop, map} from '../../assets'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from '../motion'

const Hero = ({title , text , buttonContent1 , buttonContent2 , img}) => {
  return (
  
    <section id='hero' className='hero'>
    <div className="section-info">
      <motion.h1
       variants={textVariant(1.1)}
       initial="hidden"
       animate="show"
      >{title}</motion.h1>
      <motion.p
      variants={textVariant(1.2)}
      initial='hidden'
      animate='show'
      >
      {title}
      </motion.p>

      <motion.div variants={textVariant(1.3)}
      initial="hidden"
      animate="show"
      className="button-div">
      <button><a href="#">{buttonContent1}</a></button>
      <button className='button2'><a href="#">{buttonContent2}</a></button>
      </motion.div>
      
   
    </div>
    <div className="section-img">
      <motion.div
      variants={fadeIn('left' , 'spring' , 1 , 3)}
      initial="hidden"
      animate="show"
      className="img-container">
        <img src={img} alt="img" />
      </motion.div>
    </div>
    </section>
    
  )
}

export default Hero