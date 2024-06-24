import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "./CartContex.jsx";

function Header() {

  const { cart } = useContext(CartContext);

  const numberOfItems = cart.length;

  return (
    <div className='header'>
      <Link to="/"><img src='logo.png' alt='Site Logo' /></Link> 
      <div className='search'>
        <input type='text' placeholder='Search items...' />
        <button type='submit'>Search</button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="category">Items</Link>  
        <Link to="cart">
          <img src='cart.png' alt='Cart' />
          {numberOfItems > 0 && <span className="cart-count"> {numberOfItems}</span>}
        </Link>
      </div>
    </div>
  );
}

export default Header;
