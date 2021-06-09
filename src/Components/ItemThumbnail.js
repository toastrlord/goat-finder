import React, {Component} from 'react';
import { goatNameToLink } from '../Routes';
import { Link } from 'react-router-dom';

class ItemThumbnail extends Component {
    render() {
        const {goatName, imgSrc, price} = this.props;
        return (<Link to={goatNameToLink(goatName)} className='item-thumbnail'>
                <p>{goatName}</p>
                <img src={process.env.PUBLIC_URL + '/' + imgSrc} alt={goatName} className='goat-image'/>
                <p>${price}</p>
            </Link>);
    }
}

export default ItemThumbnail;