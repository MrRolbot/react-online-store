import React from 'react'
import Button from 'react-bootstrap/Button'
import IMG1 from '../../assets/home-shoes.jpg'
import './Home.css'

const Home = () => {
  return (
    <section className='home-container'>
        <div className='current-collection'>
            <h1>Summer <br/>Collection</h1>
            <h1 className='year'>2022</h1>
            <p>Find your shoes from our various collections. Here shoes<br className='hide-mobile'/>
                are endless and profit is also endless.
            </p>
            <Button variant='primary'>Shop Now</Button>
            <div className='shoe-carousel'></div>
        </div>
        <div className='sale-ad'>
            <img className='home-shoes' src={IMG1} alt='shoes'/>
        </div>
        <div className='home-stats'>
            <p className='stat divider'><span className='bold-number'>20k+</span> Orders Completed</p>
            <p className='stat divider'><span className='bold-number'>40k+</span> Regular Visitors</p>
            <p className='stat'><span className='bold-number'>15k+</span> Happy Customers</p>
        </div>
    </section>
  )
}

export default Home