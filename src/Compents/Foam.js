import React, { useState, useEffect } from 'react';
import '../CompentsCss/EFoam.css'; // Importing the CSS
import Button from './Button';

// Client Slider Component
const ClientSlider = () => {
  const clients = [
    {
      name: 'CEO of Us Digitize',
      review:
        'I am the owner of US DIGITIZE. It is my pleasure to commend Mehak Naz for her exceptional work in managing our social media marketing. Her expertise and innovative approach have greatly enhanced our digital presence. Thank You.',
      image: '../Reviews/Review-1.webp',
    },
    {
      name: 'CEO of Alnoor Tutors',
      review:
        'Thank you so much for your exceptional work on my Facebook ads campaign! Your expertise and dedication have truly made a difference. In just 28 days, we’ve seen incredible reach and engagement. Thank you again.',
      image: '../Reviews/Review-2.webp',
    },
    {
      name: 'CEO of Zafran Kapra',
      review:
        'Mehak Naz did a fantastic job managing Zafran Kapra’s social media. Her creativity and strategy boosted our online presence. Highly recommend her!',
      image: '../Reviews/Review-3.webp',
    },
    {
      name: 'CEO Europeon Institute',
      review:
        'Mehak is a true professional and a master of her craft. Her digital marketing strategies have driven real results for our business. Thanks.',
      image: '../Reviews/Review-4-.webp',
    },
    {
      name: 'CEO of Tech Club',
      review:
        'Mehak Naz has been an incredible asset to Tech Club, running highly effective sales campaigns and delivering great results.',
      image: '../Reviews/Review-5.webp',
    },
    {
      name: 'CEO of Jacket Patch',
      review:
        'I am Richard Wilson, and Mehak has been managing the off-page SEO and backlinking for my website. I’ve seen a big improvement in visibility and rankings.',
      image: '../Reviews/Review-6.webp',
    },
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
    }, 8000); // Auto-slide every 8 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div id="client-reviews" className="reviews-section">
      <div className="containerr">
        <h2 className="text-center">What Our Clients Say</h2>
        <div className="review-container">
          <button onClick={goToPrevious} id="prev" className="nav-button">
            &lt;
          </button>
          <div className="review-content">
            <div
              className="slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="review"
                  style={{ minWidth: '100%' }}
                >
                  <p className="client-review">"{client.review}"</p>
                  <img
                    src={client.image}
                    alt={`Client ${index + 1}`}
                    width="40"
                  />
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
  );
};

// Main ContactForm Component
const ContactForm = () => {
  const [button, setButton] = useState(true);

  // Adjust button visibility based on window width
  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    window.addEventListener('resize', showButton);
    showButton(); // Initial check
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      {/* Client Reviews Section */}
      <ClientSlider />

      {/* Contact Form Section */}
      <div className="container">
        <div className="left-content">
          <h1>
            <span style={{ color: '#ec3737' }}>Get My </span> FREE Digital
            Marketing Proposal
          </h1>
          <p>Fuel Your Business Growth with Digital Mehak’s Tailored Approach!</p>
          <div className="talk-expert">
            <div className="flex-expert">
              <img src="../Images/Profile.webp" alt="Profile" />
              <div className="diver">
                <h3>Digital Mehak</h3>
                <h4>TALK TO AN EXPERT</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <form className="contact-form">
            <div className="input-flex"> 
              <div className="flex"> 
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="flex">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="service">Required Services:</label>
                <select id="service" name="service" required>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="social-media-management">
                    Social Media Management
                  </option>
                  <option value="graphic-design">Graphic Designing</option>
                  <option value="web-development">Web Development</option>
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
             <Button buttonStyle="btn--outline">GET FREE QUOTE</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
 