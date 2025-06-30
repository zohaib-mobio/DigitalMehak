import React, { useState, useEffect, Suspense } from 'react';
import '../CompentsCss/Elementor.css';
import FadeInOnScroll from '../Compents/FadeScroll';

export default function Elementor() {
  const [width, setWidth] = useState();
  const fadeRef = FadeInOnScroll();

  // Async operations (like data fetching) would go here if needed
  

  const setColor = {
    color: 'rgb(218, 209, 209)',
  };
  const brightness = {
   
  };

  return (
    <div className="element-container" ref={fadeRef}>
      <div className="elementor">
        <img src="../topLogo/Digital.webp" width="66" />
        <h2>Reach New Heights</h2>
        <p style={setColor}>
          Our goal is to enable businesses to reach new heights through personalized digital strategies. We stay up-to-date with the latest technologies and trends to keep your brand competitive and relevant.
        </p>
      </div>
      <div className="elementor">
        <img src="../topLogo/support.webp" width="80" style={brightness} />
        <h2>Professional Support</h2>
        <p>
          As we grow, we continue to improve our processes and invest in state-of-the-art tools and resources to provide our digital marketing partners with top-notch services.
        </p>
      </div>
      <div className="elementor">
        <img  src="../topLogo/ribbon.webp" width="80" />
        <h2>Quality Assurance</h2>
        <p style={setColor}>
          At Digital Mehak, every project reflects my commitment to quality and excellence. With a focus on delivering results that matter, I ensure that each digital marketing strategy, campaign, and design is tailored to meet the highest standards.
        </p>
      </div>
    </div>
  );
}


 