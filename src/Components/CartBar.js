import React, { Component } from 'react';
import { addCartListener, clearItem, getCart } from '../Cart';

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
            cart: getCart()
        }
        this.onCartChanged = this.onCartChanged.bind(this);
        addCartListener(this.onCartChanged);
    }

    onCartChanged() {
        const newCart = getCart();
        this.setState({
            cart: newCart
        });
    }

    render() {
        const {cart} = this.state;
        return <div style={{display: 'flex'}}>
            {
                Object.keys(cart).map((item, index) => {
                    console.log(item);
                    return <CartItem itemName={item} quantity={cart[item].quantity} price={cart[item].price} key={index}/>
                })
            }
        </div>;
    }
}

export default CartBar;