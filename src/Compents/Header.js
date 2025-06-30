
import React, { useEffect, useState } from 'react';
import '../CompentsCss/Navbar.css';  
import  './Animation';  
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import {NavLink} from 'react-router-dom'  
import FadeInOnScroll from '../Compents/FadeScroll'  
import { ButtonStyle } from '../Function/Buttonstyle'  
import Button from '../Compents/Button'; 
  

export default  function Header() {
  const button = ButtonStyle() 
  const fadeRef = FadeInOnScroll()
    // TypingEffect Component     
      const [text] = useTypewriter({
        words: ['Digital Marketer','Content Writer','Graphic Designer'],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 30,
    });  
       
      const [color, setColor] = useState('digital'); 
     
      const RedColor = { 
        color: '#ec3737', 
    
      };
      const borderRed= {
        borderBottom:'3px solid red'
      }
      
    
      const offWhite = { 
        color: '#b3b4b5'
      };
    
    

  return (
    <div> 
    <div className="Hero-Section">
    <section className="sec-1"ref={fadeRef}>
    <div className="fix">
    <div className="Headline">
      <div className="element-icon">
        <p className='fas fa-circle-notch' style={RedColor}> <span> PROFESSIONAL</span></p>
        <p className='fas fa-circle-notch' style={RedColor}> <span> DEDICATED</span></p>
      </div>  
    </div>    
    <h1>Digital Mehak Offers</h1>
    <span className="TextChange"style={RedColor}>{text}<Cursor/></span> 
    <h3 style={offWhite}>Every digital challenge has a digital solution. Let’s tackle them together and turn obstacles into opportunities!".</h3>
    <div className="flex-btn"> 

    <Button buttonStyle="fas fa-paper-plane btn--outline">
        <NavLink to="/Contact" style={{color:'white'}} >
        GET STARTED
        </NavLink>
         </Button> 

        <Button buttonStyle="btn--outline-service fas ">
      <NavLink to="/Services"style={{color:'white'}}>
          Our Services <i className="fa-solid fa-chevron-right"></i>
          
        </NavLink>
        </Button>
       
</div>
    </div>  
  </section>  
      </div>
    </div>
  )
    }
