import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className='testimonial-section'>
        <h1>What our <span className='highlight'>clients Say </span><br/>About Us</h1>
        <Carousel>
            <Carousel.Item interval={3000}>
                <div className='testimonial-cards'>
                    <div className='review-card hide-mobile'>
                        <img className='customer-image' src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/05/street-photography-strangers-man-with-sunglasses.jpg' alt='client-picture'/>
                        <p className='name'>Customur's Name <br/>Title</p>
                        <div className='comment'>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <div className='review-card'>
                        <img className='customer-image' src='http://ofad.org/files/daily-photo/not-so-recent-and-random-portraits.jpg' alt='client-picture'/>
                        <p className='name'>Customur's Name <br/>Title</p>
                        <div className='comment'>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <div className='review-card'>
                        <img className='customer-image' src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/05/street-photography-strangers-man-with-sunglasses.jpg' alt='client-picture'/>
                        <p className='name'>Customur's Name <br/>Title</p>
                        <div className='comment'>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <div className='testimonial-cards'>
                    <div className='review-card hide-mobile'>
                        <img className='customer-image' src='http://ofad.org/files/daily-photo/not-so-recent-and-random-portraits.jpg' alt='client-picture'/>
                        <p className='name'>Customur's Name <br/>Title</p>
                        <div className='comment'>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <div className='review-card'>
                        <img className='customer-image' src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/05/street-photography-strangers-man-with-sunglasses.jpg' alt='client-picture'/>
                        <p className='name'>Customur's Name <br/>Title</p>
                        <div className='comment'>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <div className='review-card'>
                        <img className='customer-image' src='https://expertphotography.b-cdn.net/wp-content/uploads/2018/05/street-photography-strangers-man-with-sunglasses.jpg' alt='client-picture'/>
                        <p className='name'>Customur's Name <br/>Title</p>
                        <div className='comment'>
                        <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    </section>
  )
}

export default Testimonials