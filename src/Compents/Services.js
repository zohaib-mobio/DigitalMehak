import React, { useEffect, useState } from 'react'; 
import '../PageCss/Services.css'   
import Button from '../Compents/Button';
import { ButtonStyle } from '../Function/Buttonstyle'  
import '../Compents/Animation' 
import FadeInOnScroll from '../Compents/Animate' 


  
export default function Services() {
 


  
const fadeRef = FadeInOnScroll()
  const button = ButtonStyle()
   
  return (
    <div>
      {/* Banner Section */}
      <header className="banner">    
        <div className="banner-content">  
          <h1>Our Services</h1> 
        </div> 
      </header> 

      {/* Services Section */} 
      <div className="services">
        <div className="img-section">
        <h1 className='font-text'>Fueling Brands With Digital Power</h1>
        <div className="service-container" >
      
      
          <div className="sbox-container" ref={fadeRef}>
        <div id="big-box"className="Active-border Active-shadow"> 
            <div className="left">
            <img src='../topLogo/Digital.webp'width="50"/>
            </div>
            <h2>Social Media Management</h2>
            <p>I manage your social media by creating and scheduling content that aligns with your brand’s goals, ensuring consistency across platforms like Facebook, Instagram, and LinkedIn. I monitor performance, analyze metrics, and adjust strategies to maximize engagement and reach. By interacting with your followers, responding to comments and messages, I help strengthen your online community, boost brand awareness, and drive growth through effective social media management.
            </p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        <div id="big-box">
        <div className="left"> 
        <img src='../topLogo/Gmail.webp'width="50"/>
            </div>
        <h2>
        Email Marketing</h2>
            <p>I manage your email marketing by creating targeted campaigns that engage your audience and drive results. From crafting compelling content and designing visually appealing templates to personalizing messages and segmenting your email lists, I ensure each campaign is relevant and effective. I also track key metrics like open rates, click-through rates, and conversions to optimize performance, helping you strengthen customer relationships, increase engagement, and boost sales through a well-executed email marketing strategy. description.value specific niche,content offer thoroughly researched,SEO-optimized,engagement and conversion</p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        <div id="big-box">
        <div className="left">
        <img src='../topLogo/videoEdtior.webp'width="50"/>
            </div>
        <h2>Video Editor</h2>
            <p>I am your video editor, responsible for editing and enhancing your videos to ensure they are engaging, polished, and aligned with your brand’s vision. From cutting and trimming footage to adding effects, transitions, music, and text, I work to create a smooth, professional final product. I focus on maintaining a consistent style, pacing, and quality, ensuring your videos capture the attention of your audience and effectively communicate your message.</p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        <div id="big-box"className="Active-border">
        <div className="left">
        <img src='../topLogo/Graphic.webp'width="50"/>
            </div>
        <h2>E-Commerce Marketer </h2>
            <p>
            I am your e-commerce marketer, responsible for promoting and managing your online store to drive traffic, increase sales, and enhance brand visibility. From creating targeted campaigns, optimizing product listings, and managing ads to analyzing customer behavior and improving the shopping experience, I work to ensure your e-commerce business thrives. My focus is on maximizing conversions, using strategies like SEO, email marketing, and social media, to help your business grow and reach its full potential
            </p>
            <h5 className='h5'>SERVICES DETAILS</h5>
        </div>
        </div>
     
        </div>
        <div className="btn-container">
      {button && <Button buttonStyle="fas fa-paper-plane btn--outline"> GET STARTED</Button>}
     
      <a href="https://wa.link/cyd93n" target="_blank" rel="noopener noreferrer">
        <button className="fa-solid fa-phone"></button> 
      </a>
    
      <div className="info">
      <p>(92) 3162742121</p>
      <p>TALK TO AN EXPERT</p>
      </div> 
      </div>
        </div>
        </div>
    </div>
  )

}