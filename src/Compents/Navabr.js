import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../CompentsCss/Navbar.css";
import "./Animation";
import { NavLink } from "react-router-dom";
import { ButtonStyle } from "../Function/Buttonstyle";
import "../Nav-Slider/slider.css";
import { useNavToggle } from "../Nav-Slider/Slider";
import Video from '../Banner-Video/Video'

function Navbar(props) {
  const { isOpen, CloseNav, setIsOpen } = useNavToggle();
  const button = ButtonStyle();

  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Function to close the slider when a link is clicked
  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the slider
  };
  // eslint-disable-next-line no-restricted-globals
  const showVideo = location.pathname === "/";

  return (
    <div >
     {/* {showVideo && <Video />} */}
      <div className="Navbar">
      <NavLink  className="Enb-600px" to="/">
        <img  src="../Images/Nav-Logo2.webp" alt="Navbar"/>
      </NavLink>

        <ul className={`ul-list slider-content ${isOpen ? "Close" : "Open"}`}>
          <NavLink to="/" >
          <img className="dis-logo " src="../Images/Nav-Logo2.webp"/>
          </NavLink>
          <NavLink className="ul-li" to="/" onClick={handleNavLinkClick}>
            HOME
          </NavLink>
          <NavLink className="ul-li" to="/Services" onClick={handleNavLinkClick}>
            SERVICES
          </NavLink>
          <NavLink className="ul-li" to="/Blog" onClick={handleNavLinkClick}>
            BLOG
          </NavLink>
          <NavLink className="ul-li" to="/Contact" onClick={handleNavLinkClick}>
            CONTACT
          </NavLink> 
        </ul>
        <div className="combine">
          <i
            className={`fa-solid fa-${isOpen ? "xmark" : "bars"}`}
            onClick={() => CloseNav(isOpen, setIsOpen)}
          ></i>
          <a href="https://wa.link/cyd93n" target="_blank" rel="noopener noreferrer">
            <button className="fa-solid fa-phone"></button>
          </a>
          {button && (
            <Button buttonStyle="btn--outline">
              <NavLink to="/Contact">CONTACT US</NavLink>
            </Button>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
 