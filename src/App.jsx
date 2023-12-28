import React from 'react'
import { Route , Routes   } from "react-router-dom"
import { About, Contact, Home, Services } from './pages'
import { Footer, Navbar } from './components'
import './app.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/*' element={<Home />} />
    </Routes>
    <Footer />
    </div>
    
  )
}

export default App