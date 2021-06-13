import React, { Component } from 'react';
import { addItems } from '../Cart';

class ShopItem extends Component {
    constructor(props) {
        super(props);
        this.quantityRef = React.createRef();
    }
    render() {
        const {itemName, goatInfo} = this.props;
        const {price, description, imageSource} = goatInfo;
        return <div className='shop-item'>
            <h1>{itemName}</h1>
            <img src={process.env.PUBLIC_URL + '/images/' + imageSource} alt={itemName} className='goat-image'/>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <label htmlFor='quantity'>Quantity:</label>
            <input htmlFor='quantity' type='number' min='1' step='1' max='100' defaultValue='1' ref={this.quantityRef} className='quantity-box'
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
                }}
            />
            <button onClick={() => addItems({price, description, imageSource, name: itemName}, this.quantityRef.current.value)}>Add to Cart</button>
        </div>;
    }
}

export default ShopItem;