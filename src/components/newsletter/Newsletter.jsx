import React from 'react'
import BG from '../../assets/newsletterbg.webp'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-section'>
        <div className='bg-image'>
            <img className='bg-shoes' src={BG} alt='bg-shoes' />
        </div>
        <div className='newsletter-content' >
            <h1>Join Our <span className='highlight'>News Letters</span></h1>
            <p>Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua.</p>
            <input className='email-input' required type='email' placeholder=' Email Address'/>
            <input className='btn-primary btn submit-button' type='submit' value='>' />
        </div>
    </div>
  )
}

export default Newsletter