import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  return (
    <div className="home-page">
      <p>Welcome to our shop</p>
      <button><Link to="/category">See products</Link></button>
    </div>
  );
};

export default HomePage;
