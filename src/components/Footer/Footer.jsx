import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div>
        <div className="footer" id='footer' >
            <div className="footer-content">
                <div className="footer-content-left">
                   <img src={assets.logo} alt="" /> 
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aliquam numquam, ipsa officia magni laboriosam ratione aliquid magnam aspernatur dolorum eos, ut similique repudiandae? Praesentium recusandae minus ducimus molestias consectetur!</p>
                   <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                   </div>
                </div>


                <div className="footer-content-center">
                     <ul>
                        <h2>Company</h2>
                     <li>Home</li>
                     <li>About us</li>
                     <li>Delivery</li>
                     <li>Privacy policy</li>
                     </ul>
                </div>


                <div className="footer-content-right">
                 <h2>Get In Touch</h2>
                 <ul>
                    <li>+1-212-456-7485</li>
                    <li>contact@tomato.com</li>
                 </ul>
                </div>
            </div>
            <hr />
      <p className="footer-copyright">copyright 2025 0 Tomato.com -All Right Reserved.</p>

        </div>
    </div>
  )
}

export default Footer