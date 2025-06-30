import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "../PageCss/Blog.css";

export default function Blog() {
  const MAX_LENGTH = 250;
  const blogData = [
    {
      id: 1,
      title: 'Top 10 Guest Posting Websites for High-Quality Backlinks',
      description: 'Here’s a table with the websites, their Domain Authority (DA), Page Authority (PA), and links for guest posting: Guest Posting Websites Sheet This table includes DA and PA (Domain Authority and Page Authority) values for each website to help you evaluate the backlink potential of guest posting on these sites.',
      image: '/Images/Blog-1.jpg',
    },
  
  ];


  return (
    <>
        <div className="hero-banner">
          <div className="overlay">
            <div className="hero-content">
              <h1 >Our Blog</h1>
              {/* <p>Latest insights and updates from our team</p> */}
            </div>
          </div>
        </div>
      <div className="blog-cards">
      {blogData.map((card) => (
        <article className="blog-card" key={card.id}>
          <img className="blog-card-img" src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>
          {card.description.length > MAX_LENGTH
    ? card.description.slice(0, MAX_LENGTH) + '...'
    : card.description}
            </p>
            <div className="profile">
                <img className="profile-img" src="../topLogo/Profile.webp" alt="Client" />
                <div className="flex-text">
                  <h1>Digital Mehak</h1>
                  <p>2h ago</p>
                </div>
              </div>
          <NavLink to="/View" >
          <button className="read-more-btn">Read More</button>
              </NavLink>
        </article>
      ))}
    </div>
    </>
  );
}

