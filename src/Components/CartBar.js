import React, { Component } from 'react';
import { addCartListener, clearItem, getCart } from '../Cart';
import {Link} from 'react-router-dom';

function CartItem(props) {
    return <div>
        <p>{props.itemName}</p>
        <p>x{props.quantity}</p>
        <p>Price: ${props.quantity * props.price}</p>
        <button onClick={() => clearItem(props.itemName)}>Remove From Cart</button>
    </div>;
}

class CartBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: getCart(),
            extended: true
        }
        this.onCartChanged = this.onCartChanged.bind(this);
        this.toggle = this.toggle.bind(this);
        addCartListener(this.onCartChanged);
    }

    onCartChanged() {
        const newCart = getCart();
        this.setState({
            cart: newCart
        });
    }

    toggle() {
        const extended = !this.state.extended;
        this.setState({
            extended
        });
    }

    render() {
        const {cart, extended} = this.state;
        const cartItems = Object.keys(cart).map((item, index) => {
            console.log(item);
            return <CartItem itemName={item} quantity={cart[item].quantity} price={cart[item].price} key={index}/>
        });
        if (extended) {
            return <div className='cart-bar'>
                Your cart:
                {
                    cartItems.length ? cartItems : <p>Your cart is empty.</p>
                }
                <Link to='/checkout'>Checkout</Link>
            </div>;
        } else {
            return null;
        }
        
    }
}

export default CartBar;