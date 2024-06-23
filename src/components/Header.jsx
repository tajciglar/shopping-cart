import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
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
        <Link to="cart"><img src='cart.png' alt='Cart' /></Link>
      </div>
    </div>
  );
}

export default Header;
