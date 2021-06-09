import React, {Component} from 'react';
import { getCart } from '../Cart';

function CheckoutItem(props) {
    const {itemName, quantity, price, imageSource} = props;
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={'images/' + imageSource} alt={itemName}/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <p>{itemName}</p>
                <p>Quantity: {quantity}</p>
                <p>Subtotal: ${quantity * price}</p>
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
    }

    render() {
        const {cart} = this.state;
        let total = 0;
        return <div>
            {
                Object.keys(cart).map((itemName) => {
                    total += cart[itemName].quantity * cart[itemName].price;
                    return <CheckoutItem itemName={itemName} quantity={cart[itemName].quantity} price={cart[itemName].price} imageSource={cart[itemName].imageSource}/>
                })
            }
            <p>Total: ${total}</p>
            <button>Order!</button>
        </div>
    }
}

export default CheckoutPage;