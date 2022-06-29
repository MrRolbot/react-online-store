import React from 'react'
import {FaGlobe, FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import LOGO from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer-socials-content' >
            <img className='footer-logo' src={LOGO} alt='logo' />
            <p className='social-text' ></p>
            <div className='social-icons'>
                <a href='https://www.mrrolbot.com' target='__blank' rel='noreferrer' ><FaGlobe /></a>
                <a href='https://github.com/MrRolbot' target='__blank' rel='noreferrer' ><FaGithub /></a>
                <a href='https://twitter.com/MrRolbot' target='__blank' rel='noreferrer' ><FaTwitter /></a>
                <a href='https://www.linkedin.com/in/edwin-roldan/' target='__blank' rel='noreferrer' ><FaLinkedinIn /></a>
            </div>
            <p>Copyright <a href='https://www.mrrolbot.com' target='__blank' rel='noreferrer' >Mr. Rolbot</a></p>
        </div>
    </footer>
  )
}

export default Footer