import React from 'react';
import '../CompentsCss/Video.css'; // CSS file for styling the video

const BackgroundVideo = () => {
  return (
    <video className="background-video" autoPlay loop muted>
      <source src="./Banner-Video/Banner-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default BackgroundVideo; 