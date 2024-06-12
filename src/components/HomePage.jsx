import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to Our Shop</h1>
        <p>We offer the freshest and highest quality groceries delivered straight to your door.</p>
        <button className="see-products-button">
          <Link to="/category">See Products</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
