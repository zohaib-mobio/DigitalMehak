import React from 'react'
import '../CompentsCss/Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  const clicktop = () => {
    window.scrollTo({
      top: 0,      // Scroll to the top
      behavior: "smooth", // Smooth scroll
    });
  };
  // const socailmedialinks = {
  //   facebook:"https://www.facebook.com/profile.php?id=61555325202079",
  //   linkedin:"https://www.linkedin.com/in/digitalmehak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   insta:"https://www.instagram.com/digitalmehakx/",
  //   printest:"https://www.pinterest.com/digitalmehakx/?invite_code=264248bccc35415092135a17ca852bf0&sender=1044624213476049673",
  //   behance:"https://www.behance.net/mehaknaz1"
  // }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-contact">
            <div className="footer-600px">
              <div className="footer-width"  >
                <img src="../Images/Nav-Logo2.webp" alt="Logo" />
                <p className="p">"Explore my social media for the latest insights, updates, and strategies that drive real results. Let’s connect and grow together!"</p>
                <div className="footer-social">
                  <a href="https://www.facebook.com/profile.php?id=61555325202079" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/digitalmehak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/digitalmehakx/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.pinterest.com/digitalmehakx/?invite_code=264248bccc35415092135a17ca852bf0&sender=1044624213476049673" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="https://www.behance.net/mehaknaz1" target="_blank">
      <i class="fa-brands fa-behance"></i>
      </a> 
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <h4>OUR SERVICES</h4>
            <ul>
              <li className="icon">
                <i className="fa-solid fa-video"></i>
                <a href="#">Video Editing</a>
              </li>
              <li className="icon">
                <i className="fa-solid fa-paint-roller"></i>
                <a href="#">Graphic Designing</a>
              </li>
              <li className="icon">
                <i className="fa-solid fa-globe"></i>
                <a href="#">Web Development</a>
              </li>
              <li className="icon">
                <i className="fa-solid fa-desktop"></i>
                <a href="#">Digital Marketing</a>
              </li>
              <li className="icon">
                <i className="fa-solid fa-desktop"></i>
                <a href="#">Social Media Management</a>
              </li>
              
            </ul>
          </div>
          <div className="footer-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li className="icon">
                <i className="fa-solid fa-house"></i>
                <NavLink onClick={clicktop} to=''>HOME</NavLink>
              </li> 
              <li className="icon">
                <i className="fa-solid fa-briefcase"></i>
                <NavLink onClick={clicktop} to='/services'>SERVICES</NavLink>
              </li>
              <li className="icon">
                <i className="fa-regular fa-user"></i>
                <NavLink onClick={clicktop} to='/blog'>BLOG</NavLink>
              </li>
              <li className="icon">
                <i className="fa-solid fa-phone"></i>
                <NavLink onClick={clicktop} to='/contact'>CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>CONTACT INFO</h4>
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <p>(92) 316-2742121</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
              <p>digitalmehak@gmail.com</p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
              <p>Sindh, Pakistan</p>
            </div>
         
     
          </div> 
        </div> 
       
        <p className="footer-copyright">&copy;copyright 2024 Website Dev. ShahidZameer. Contact info<a href="https://wa.link/vhcg3p" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-phone"></i></a>Reserved.</p>
      </div>
    </footer>
  )
}
 