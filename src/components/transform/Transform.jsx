import React from 'react'
import './transform.css'
import Head from '../head/Head'
import { keyboard } from '../../assets'



const Transform = () => {
  return (
    <section>
    <div className="section-info">
    <Head />
    <h1>Transform Your Digital Presence with Our Agency</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni repudiandae ad, distinctio debitis laboriosam sunt consequuntur provident placeat enim modi nam ipsa odio quo alias eius, animi totam officiis, dicta est labore cumque? Consequatur quo saepe dolore! Quia, culpa in?</p>
    <div className="span-column">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-check" viewBox="0 0 16 16">
    <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
    </svg>
    <span>At vero eos accusamu areg ghae</span>
    </div>
    <div className="span-column">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-check" viewBox="0 0 16 16">
    <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
    </svg>
    <span>At vero eos accusamu areg ghae</span>
    </div>
    <div className="span-column">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-check" viewBox="0 0 16 16">
    <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
    </svg>
    <span>At vero eos accusamu areg ghae</span>
    </div>
   
    <button className='button-transform'><a href="#">Discover More</a></button>
    </div>
    <div className="section-img">
    <div className="img-container">
    <img src={keyboard} alt="keyboard" />
    </div>
    </div>
    
    </section>
  )
}

export default Transform