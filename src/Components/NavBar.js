import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return <div className='navbar'>
        <Link to='/about' className='navbar-element'>About Us</Link>
        <Link to='/shop' className='navbar-element'>Shop</Link>
        <Link to='/checkout' className='navbar-element'>Checkout</Link>
    </div>
}

export default NavBar;