import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ShopItem from './ShopItem';
import goats from '../index';
import ItemThumbnail from './ItemThumbnail';

class ShopPage extends Component {
    render() {
        return <div>
            <h1>Shop</h1>
            <div style={{display: 'flex'}}>
                <Link to='/about'>About Us</Link>
                <Link to='/checkout'>Checkout</Link>
            </div>
            <p>Click a goat below to get started!</p>
            <h2>Available Goats:</h2>
            <div className='item-thumbnail-container'>
                {
                    Object.keys(goats).map((goatName, index) => <ItemThumbnail goatName={goatName} imgSrc={'images/' + goats[goatName].imageSource} key={index} />)
                }
            </div>
        </div>;
    }
}

export default ShopPage;