import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <img src='#'></img> 
        <div className='search'>
         <input type='text'></input>
         <button type='submit'></button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="items">Items</Link>  
            <Link><img src='cart.png' width={25} height={25}></img></Link>
        </div>
    </div>
  );
}

export default Header;