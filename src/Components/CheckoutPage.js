import React, {Component} from 'react';
import { getCart, clearItem, addCartListener, updateItem } from '../Cart';

class CheckoutItem extends Component {
    constructor(props) {
        super(props);
        this.quantityRef = React.createRef();
        this.state = {
            quantity: this.props.quantity
        }
    }

    quantityChanged(newQuantity) {
        this.setState({
            quantity: Number(newQuantity),
        })
        updateItem(this.props.itemName, newQuantity);
    }

    render() {
        const {itemName, price, imageSource} = this.props;
        const {quantity} = this.state;
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <img src={process.env.PUBLIC_URL + '/images/' + imageSource} alt={itemName}/>
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '8px'}}>
            <p style={{fontWeight: 'bold'}}>{itemName}</p>
                <label htmlFor='quantity'>Quantity: </label>
                <input className='quantity-box' htmlFor='quantity' type='number' min='1' max='100' step='1' defaultValue={quantity} ref={this.quantityRef}
                    onKeyDown={(e) => {
                        if ((Number(e.key) >= 0 && Number(e.key) <= 9) || e.key === 'Backspace' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                            return true;
                        } else {
                            e.preventDefault();
                            return false;
                        }
                }}
                onChange={(e) => {
                    if (e.target.value > 100) {
                        e.target.value = 100;
                    }
                    this.quantityChanged(e.target.value);
                }}
                />
                <p>Subtotal: ${(quantity * price).toFixed(2)}</p>
            </div>
            <button onClick={() => clearItem(itemName)}>Remove from cart</button>
        </div>
    );
    }
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
        const body = checkoutItems.length ? 
        <div>
            {checkoutItems}
            <p style={{fontWeight: 'bold', fontSize: '22px'}}>Total: ${total.toFixed(2)}</p>
            <button>Order!</button>
        </div>
        : <p style={{fontWeight: 'bold', fontSize: '22px'}}>Your cart is empty!</p>;

        return <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Checkout</h1>
                {body}
        </div>
    }
}

export default CheckoutPage;