import React from 'react'
import './aboutButton.css'
const AboutButton = ({content}) => {
  return (
    <div>
    <div className="about-us">
    <span>{content}</span>
    </div>
    </div>
  )
}

export default AboutButton