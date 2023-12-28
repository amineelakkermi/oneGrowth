import React from 'react'
import './blue.css'
import { chart, envelope, square } from '../../assets'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textContainer } from '../motion'

const itemsCard = [
  {
    img : square,
    cardTitle : "Paid Media",
    cardParagraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas vitae consequatur. Error, quas aliquid.",
  },
  {
    img : chart,
    cardTitle : "Website Optimisation",
    cardParagraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas vitae consequatur. Error, quas aliquid.",
  },
  {
    img : envelope,
    cardTitle : "Paid Media",
    cardParagraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas vitae consequatur. Error, quas aliquid.",
  },
]


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Blue = ({ title , paragraph}) => {
  return (
    <section className=' blue'>
        <div className="heading-part">
        <motion.h2
         variants={fadeIn('right' , 'spring' , 1 , 3)}
         initial="hidden"
         animate="show"
        >{title}</motion.h2>
        <motion.p
         variants={fadeIn('left' , 'spring' , 1 , 3)}
         initial="hidden"
         animate="show"
        
        >{paragraph}</motion.p>
        </div>
        <div className="second-part">
        <motion.div
          variants={staggerContainer(0.2 , 0.8)}
          initial="hidden"
          whileInView="show"
          className="container">
            {
              itemsCard.map((item , index) => (
                <motion.div key={index}
                variants={cardVariants}
                className="card">
                <div className="circle-icons">
                 <img src={item.img} alt="img" />
                  </div>
                  <h4>{item.cardTitle}</h4>
                  <p>{item.cardParagraph}</p>
                  <div className='arrow'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                  </div>
            </motion.div>
              ))
            }
        </motion.div>
        </div>
    </section>
  )
}

export default Blue