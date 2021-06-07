import React, {Component} from 'react';
import { goatNameToLink } from '../Routes';

class ItemThumbnail extends Component {
    render() {
        const {goatName, imgSrc} = this.props;
        return (<a href={goatNameToLink(goatName)} className='item-thumbnail'>
                <p>{goatName}</p>
            
                <img src={imgSrc} alt={goatName} className='goat-image'/>
            </a>);
    }
}

export default ItemThumbnail;