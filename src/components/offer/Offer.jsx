import React from 'react'
import {SiNike} from 'react-icons/si'
import ICON1 from '../../assets/24-hours-delivery.png'
import ICON2 from '../../assets/refund.png'
import ICON3 from '../../assets/discount.png'
import ICON4 from '../../assets/vip-card.png'
import './Offer.css'

const Offer = () => {
  return (

    <section className='offer-section'>
        <div>
          <h1>What we <span className='highlight'>offer</span></h1>
        </div>
        <div className='offer-cards'>
          <div className='card'>
            <img className='card-icon' src={ICON1} alt='24-7 support'/>
            <h5 className='card-title'>24/7 Support</h5>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='card-logo'><SiNike /></p>
          </div>
          <div className='card'>
            <img className='card-icon' src={ICON2} alt='24-7 support'/>
            <h5 className='card-title'>Cash Back</h5>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='card-logo'><SiNike /></p>
          </div>
          <div className='card'>
            <img className='card-icon' src={ICON3} alt='24-7 support'/>
            <h5 className='card-title'>Monthly Offers</h5>
            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className='card-logo'><SiNike /></p>
          </div>
        </div>
    </section>
    
  )
}

export default Offer