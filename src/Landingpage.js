import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="DriveU Logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">For Business</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#" style={{ backgroundColor: '#000', color: '#fff' }}>Download App</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Hire professional drivers, and all car services at your fingertips.</h1>
        <p>Get rewarded for owning a car!</p>
        <div className="button-group">
          <button>Book Driver</button>
          <a href="#">Download App</a>
        </div>
      </div>
      <div className="illustration">
        <img src="illustration.png" alt="Illustration" />
      </div>
    </div>
  );
}

export default LandingPage;
