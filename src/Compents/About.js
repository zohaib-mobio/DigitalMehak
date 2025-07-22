import { useState, useEffect } from 'react';
import '../CompentsCss/About.css';
import Button from './Button';
import '../Compents/StarAnimation';
import { ButtonStyle } from '../Function/Buttonstyle';
import { NavLink } from 'react-router-dom';
import '../CompentsCss/FullScreen.css';

export default function About() {
  // State to track fullscreen status
  const [isFullScreen, setIsFullScreen] = useState(false); 
  const [cvData, setCvData] = useState(null); // State for storing fetched CV data

  // Async function to fetch CV data (simulating with a setTimeout here)
  const fetchCvData = async () => {
    try {
      // Simulate an API call (replace with actual fetch if needed)
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ message: "" }), 2000)
      );
      setCvData(response.message); 
    } catch (error) {
      console.error("", error);
    }
  };

  const openFullScreen = () => {
    setIsFullScreen(true);
    fetchCvData();  // Fetch data when fullscreen is opened
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      <div className='container-section'>
        <div className="About-Container">
          <div className="wrap">
            <p className='fas fa-circle-notch'><span>About Digital Mehak</span></p>
            <h1>HELLO !</h1>
            <p>Hey there! I'm MEHAK, the creative force behind Digital Mehak. As 
              a digital marketer, my mission is simple: to turn your digital dreams 
              into reality. I am not just another digital marketing agency; I am your 
              partner in growth and your digital strategist, matching your unique business 
              needs and goals.</p>
          </div>
          <div className="customer-focus">
            <div className="flexbox"> 
              <span className='profile-set'><i aria-hidden="true" className="fas fa-user-cog"></i></span>
              <h1>Why Choose Digital Mehak? </h1>
              <p>I will give you personalized attention. You’re not just another client. You get my undivided
                 attention, and I work closely with you to create solutions that are as unique as your 
                 business.</p>
            </div>

            <div className="flexbox">
              <span className='profile-set'><i aria-hidden="true" className="fas fa-user-cog"></i></span>
              <h1>Let’s Connect Today!</h1>
              <p>Don’t wait for success to come to you—let’s create it together. Contact me today to learn 
                how Digital Mehak can help you thrive in the ever-changing world of digital marketing.</p>
            </div>
          </div>
        </div>   
        
        <div className="portfolio-banner">
          <img src='../Images/Porfolio.jpg' alt="Portfolio"/>
          <div className="button">
            <button onClick={openFullScreen}>Check Out My CV</button>
          </div> 
        </div>   
      </div>  

      {/* Fullscreen Image Preview Overlay */}
      {isFullScreen && (
        <div className="fullscreen-overlay">
          <button className="close-button" onClick={closeFullScreen}>
            &times;
          </button>
          <img src='../Images/DigitalMehak-Cv.webp' alt="fullscreen" className="fullscreen-image" />
          {cvData && <p>{cvData}</p>} {/* Display fetched data */}
        </div> 
      )}
    </> 
  );  
}
 