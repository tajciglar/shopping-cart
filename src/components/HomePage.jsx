import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return (
    <div className="homePage">
      <p>Welcome to our shop</p>
      <button><Link to="/category">See products</Link></button>
    </div>
  );
};

export default HomePage;
