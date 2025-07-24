import React, { useState,useEffect } from 'react';
import '../PageCss/Contact.css';
import { ButtonStyle } from '../Function/Buttonstyle';
import Button from '../Compents/Button';
import '../PageCss/Foam.css';

export default function Contact() {
  const clients = [
    {
      name: 'Joseph Saint', 
      review:
      '"Learning digital marketing with Mehak Ayaz was a great experience! She made everything easy to understand and was always supportive. I really appreciated her guidance and would recommend her to anyone looking to dive into digital marketing."',
      image: '../Student/Student-1.webp',
    }, 
    {
      name: 'Farhan Mohsin', 
      review:
      'Digital Mehak Dynamos is an exceptional digital marketing teacher! Her clear explanations and practical strategies have greatly enhanced my skills. Highly recommended!',
      image: '../Student/Student-2-.webp',
    }, 

    {
      name: 'Ayesha Khan',
      review:
        'Mehak Ayaz has been a fantastic mentor! She made learning digital marketing not just easy but actually fun. Her down-to-earth approach and genuine support really helped me grasp the concepts. Im so grateful for her guidance!"',
      image: '../Student/Student-2.webp',
    },
    {
      name: 'Alishba Abbasi',
      review:'She explains all the concepts clearly and goes over them again if something isn t understood. You are a good teacher for digital marketing',
      image: '../Student/Student-3.webp',
    }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000); // Change slide every 8 seconds
  
    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); 

  const button = ButtonStyle();

  return (
    <div style={{background:'black'}}>
      <header className="contact-banner">
        <div className="contact-banner-content">
          <div className="element-i">
            <p className="fas fa-circle-notch" style={{ color: 'red' }}>
              <span>Contact</span>
            </p>
          </div>
          <h1>Let's Start Something Great Together</h1>
        </div>

      </header>
      {/* Services Section */}
      <div className="Contact-Services">
        <div className="Element-container">
          <div className="Element">
            <img src="../topLogo/Phone.webp" width="50" alt="Phone Icon" />
            <p>(+92) 316-2742121</p>
            <h3>PHONE NUMBER</h3>
          </div>
          <div className="Element">
            <img src="../topLogo/Gmail.webp" width="50" alt="Email Icon" />
            <p>digitalmehak@gmail.com</p>
            <h3>EMAIL ADDRESS</h3>
          </div>
          <div className="Element">
            <img src="../topLogo/Time.webp" width="50" alt="Time Icon" />
            <p>Mon - Fri: 9:00am - 7:00pm</p>
            <h3>WORKING HOURS</h3>
          </div>
          <div className="Element">
            <img src="../topLogo/Location.webp" width="50" alt="Location Icon" />
            <p>Sindh,Pakistan</p>
            <h3>All Over Services</h3>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="input-container">
        <div className="foam-right-content">
          <form className="contact-form">
              <h1 className='contact-h1'>Contact Us</h1>
            <div className="flex-30 input-flex">
              <div className="flex">
                <label htmlFor="first-name">FIRST NAME</label>
                <input type="text" id="first-name" name="first-name" required />

                <label htmlFor="email">LAST NAME</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="flex-option">
                <label htmlFor="last-name">EMAIL ADDRESS</label>
                <input type="text" id="last-name" name="last-name" required />
                <label htmlFor="service">REQUIRED SERVICES</label>
                <select id="service" name="service" required>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="social-media-management">
                    Social Media Management
                  </option>
                  <option value="graphic-designing">Graphic Designer</option>
                </select>
              </div>
            </div>
            <div className="full-width">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="7"
                required
              ></textarea>
              {button && (
                <Button buttonStyle="btn--outline">GET FREE QUOTE</Button>
              )}
            </div>
          </form>
        </div>
        <div className="appointment-cont">
          {button && (
            <Button buttonStyle="btn--outline">BOOK AN APPOINTMENT</Button>
          )}
          <div className="cont">
            <div className="footer-width" style={{ width: 400 }}>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=61555325202079" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a> 
                <a href="https://www.linkedin.com/in/digitalmehak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin"></i> 
                </a>
                <a href="https://www.instagram.com/digitalmehakx/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.pinterest.com/digitalmehakx/?invite_code=264248bccc35415092135a17ca852bf0&sender=1044624213476049673" target="_blank">
        <i className="fab fa-pinterest"></i>
      </a>
      <a href="https://www.behance.net/mehaknaz1" target="_blank">
      <i class="fa-brands fa-behance"></i>
      </a>
              </div> 
            </div>
            <div className="foam-client-review">
              <div className="apoint-p">

              <p>
              "Book an appointment today for any of your 
              business services and enjoy exclusive discounts! 
              Whether you're looking to boost your online presence, 
              enhance your brand, or streamline operations, our expert 
              solutions are tailored to meet your needs. Don’t miss out on 
              this limited-time offer—schedule now and save on the services 
              that will take your business to the next level!
              </p>
              </div>
              <div className="profile">
                <img src="../topLogo/Profile.webp" alt="Client" />
                <div className="flex-text">
                  <h1>Digital Mehak</h1>
                  <p>Appoinment Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="img-box-container">
    <div className="img-box">
     <img src="../Images/ContactHeader.webp"alt="" />
    </div>  

    
    <div className="text-box">
      <h1>Learn Digital Marketing  with Mehak</h1>
      <p>
    I am absolutely thrilled to announce that one-on-one mentoring is now available for all the aspiring digital marketers out there! The students have already unlocked such great results already, and now it's your time! Learn from proven strategies, hands-on experience, and expert guidance-all right from the comfort of your home. check ou m portfolio ".

Limited Period Offer: Register now and get 20% off on your course fees! Do not let this golden chance slip through your fingers to begin your career in digital marketing. 
Receive rich information and knowledge that will be invaluable in differentiating you. The seats are filling up. Book your seat fast!
        </p>
        <a href="https://www.behance.net/mehaknaz1" target="_blank" rel="noreferrer">My Portfolio</a>
    </div>
</div> 
<div className="img-box-container img-box-container-margintop">
    <div className="img-box">
     <img src="../Images/MiniDigitalProfile.jpg"alt="" />
    </div>      
    <div className="text-box">
      <h1>Ayesha Ayaz – Social Media Manager
</h1>
      <p>
   With a sharp eye for trends and a passion for creative storytelling, I help brands connect with their audience through impactful social media strategies. From designing engaging content to building consistent brand voices, I manage each platform with precision and purpose. I believe in the power of digital presence and work behind the scenes to make sure every post, reel, and campaign aligns with the brand’s vision and goals.
        </p>
        <a href="#">My Portfolio</a>
    </div>
  </div>  
 
      {/* Client Reviews Section */}
      <div id="client-reviews" className="reviews-section">
        <div className="containerr">
          <h2 className="text-center">Our Successful Students</h2>
          <div className="review-container review-cont">
            <button onClick={goToPrevious} id="prev" className="nav-button">
              &lt;
            </button>

            {/* Slider container to wrap all reviews */}
            <div className="review-content">
              <div
                className="slider"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease-in-out',
                }}
              >
                {clients.map((client, index) => (
                  <div key={index} className="review" style={{ minWidth: '100%' }}>
                    <p className="client-review">"{client.review}"</p>
                    <img src={client.image} alt={`Client ${index + 1}`} width="40" />
                    <h3 className="client-name">{client.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            <button id="next" onClick={goToNext} className="nav-button">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 