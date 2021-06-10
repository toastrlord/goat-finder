import React, {Component} from 'react';
import { getCart, clearItem, addCartListener } from '../Cart';

function CheckoutItem(props) {
    const {itemName, quantity, price, imageSource} = props;
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={process.env.PUBLIC_URL + '/images/' + imageSource} alt={itemName}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <p>{itemName}</p>
                <p>Quantity: {quantity}</p>
                <p>Subtotal: ${quantity * price}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <button onClick={() => clearItem(itemName)}>Remove form cart</button>
            </div>
        </div>
    );
}

class CheckoutPage extends Component {
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
        let total = 0;
        const checkoutItems = Object.keys(cart).map((itemName, index) => {
            total += cart[itemName].quantity * cart[itemName].price;
            return <CheckoutItem key={index} itemName={itemName} quantity={cart[itemName].quantity} price={cart[itemName].price} imageSource={cart[itemName].imageSource}/>
        });
        return <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Checkout</h1>
                {checkoutItems.length ? checkoutItems : <p>Your cart is empty!</p>}
                {checkoutItems.length ? <p style={{fontWeight: 'bold', fontSize: '22px'}}>Total: ${total}</p> : null}
            <button>Order!</button>
        </div>
    }
}

export default CheckoutPage;