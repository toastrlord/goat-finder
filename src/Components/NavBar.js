import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { addCartListener, getTotalCartItems } from '../Cart';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsInCart: getTotalCartItems()
        }
        this.onCartChanged = this.onCartChanged.bind(this);
        addCartListener(this.onCartChanged);
    }

    onCartChanged() {
        this.setState({
            itemsInCart: getTotalCartItems()
        });
    }
    
    render() {
        return <div className='navbar'>
        <Link to='/about' className='navbar-element'>About Us</Link>
        <Link to='/shop' className='navbar-element'>Shop</Link>
        <Link to='/checkout' className='navbar-element'>Cart ({this.state.itemsInCart})</Link>
    </div>
    }
}

export default NavBar;