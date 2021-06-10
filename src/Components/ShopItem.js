import React, { Component } from 'react';
import { addItems } from '../Cart';
import { Link } from 'react-router-dom';

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
            <p>Price: ${price}</p>
            <p>{description}</p>
            <input htmlFor='quantity' type='number' min='1' step='1' defaultValue='1' ref={this.quantityRef}/>
            <button onClick={() => addItems({price, description, imageSource, name: itemName}, this.quantityRef.current.value)}>Add to Cart</button>
        </div>;
    }
}

export default ShopItem;