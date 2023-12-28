import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { RiMenu3Line , RiCloseLine } from "react-icons/ri"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '../motion'

const Navbar = () => {
  const [ open , setOpen ] = useState(false);
  return (
    <motion.header
    variants={navVariants}
    initial="hidden"
    animate="show"
    className='navbar'>
      <div className="logo">
        <span>OneGrowth</span>
      </div>
      <div className="liste">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/services">Services</Link>
        <Link className='link' to="/contact">Contact</Link>
      </div>
      <div className="button">
      <button className='get-started'>Get Satarted</button>
      </div>

      <div className="responsive-header">
        {
        open
        ?
        <RiCloseLine color='black' cursor={"pointer"} size={28} onClick={() => setOpen(false)} />
        : 
        <RiMenu3Line color='black' cursor={"pointer"} size={28} onClick={() => setOpen(true)} />
      
        }
        {
        open && (
        <div className='header-container'>
        <div className="listeContainer">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/services">Services</Link>
        <Link className='link' to="/contact">Contact</Link>
        
        <div className="button-container">
        <button className='get-started-container'>Get Satarted</button>
        </div>
       </div>
        </div>
        )
        }
      </div>
    </motion.header>
  )
}

export default Navbar