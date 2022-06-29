import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Cart from '../components/cart/Cart.jsx'
import {FaShoppingCart, FaRegUser} from 'react-icons/fa'
import {SiNike} from 'react-icons/si'
import './Components.css'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#root")
  return (
    <>
    <div className='navbar'>
        <div className='nav-section logo-container'>
            <a className='logo' href='#root'><SiNike /></a>
        </div>
        <div className='nav-section nav-items-container'>
            <ul>
                <li><a href='#root' onClick={() => setActiveNav('#root')} className={activeNav === '#root' ? 'active' : ''} >Home</a></li>
                <li><a href='#offer' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
                <li><a href='#shop' onClick={() => setActiveNav('#shop')} className={activeNav === '#shop' ? 'active' : ''}>Shop</a></li>
                <li><a href='#testimonial' onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}>Testimonials</a></li>
                <li><a href='#collections' onClick={() => setActiveNav('#collections')} className={activeNav === '#collections' ? 'active' : ''}>Collections</a></li>
            </ul>
        </div>
        <div className='nav-section cart-avatar-container'>
            <Link to='/cart'><FaShoppingCart/></Link>
            <a href='#acount'><FaRegUser/></a>
        </div>
    </div>
    </>
  )
}

export default Navbar