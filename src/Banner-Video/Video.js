import React from 'react';// adjust the path as needed
import '../CompentsCss/Video.css'
const backgroundVideo = () => {
  return (
    <div className="video-background-container">
        <video autoPlay loop muted className="video-background">
          <source src="./Banner-Video/Banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
  );
};

export default backgroundVideo;
