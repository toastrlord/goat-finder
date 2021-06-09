import React, { Component } from 'react';
import goats from '../index';
import ItemThumbnail from './ItemThumbnail';

class ShopPage extends Component {
    render() {
        return <div>
            <h1>Shop</h1>
            <p>Click a goat below to get started!</p>
            <h2>Available Goats:</h2>
            <div className='item-thumbnail-container'>
                {
                    Object.keys(goats).map((goatName, index) => {
                        const currentGoat = goats[goatName];
                        return <ItemThumbnail goatName={goatName} imgSrc={'images/' + currentGoat.imageSource} price={currentGoat.price} key={index} />
                        })
                }
            </div>
        </div>;
    }
}

export default ShopPage;