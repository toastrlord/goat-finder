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
            <input htmlFor='quantity' type='number' min='1' step='1' defaultValue='1' ref={this.quantityRef}
                onKeyDown={(e) => {
                        if ((Number(e.key) >= 0 && Number(e.key) <= 9) || e.key === 'Backspace' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                            return true;
                        } else {
                            e.preventDefault();
                            return false;
                        }
                }}
            />
            <button onClick={() => addItems({price, description, imageSource, name: itemName}, this.quantityRef.current.value)}>Add to Cart</button>
        </div>;
    }
}

export default ShopItem;