// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are committed to providing you with the freshest and highest quality groceries delivered straight to your door.</p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@fakegrocerystore.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Grocery St, Fake City, Faking</p>
        </div>
        <div className="footer-section socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Taj Brzovič Ciglar. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
