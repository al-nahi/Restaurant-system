import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""  />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, esse tempore facilis repudiandae earum pariatur iste enim, nemo nesciunt corrupti eos, accusamus nostrum laudantium ipsa quisquam quas veritatis omnis?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""  />
                    <img src={assets.twitter_icon} alt=""  />
                    <img src={assets.linkedin_icon} alt=""  />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>FOR MORE INFO</h2>
                <ul>
                    <li>+11111111111</li>
                    <li>contact@yooyoo.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © DineSync.com - MAY ALLAH SAVE PALESTINE</p>
    </div>
  )
}

export default Footer