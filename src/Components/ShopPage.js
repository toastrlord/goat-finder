import React, { Component } from 'react';
import goats from '../index';
import ItemThumbnail from './ItemThumbnail';

class ShopPage extends Component {
    render() {
        return <div className='item-thumbnail-container'>
            {
                Object.keys(goats).map((goatName, index) => <ItemThumbnail goatName={goatName} imgSrc={'images/' + goats[goatName].imageSource} key={index} />)
            }
        </div>;
    }
}

export default ShopPage;