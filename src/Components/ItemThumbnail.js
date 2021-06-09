import React, {Component} from 'react';
import { goatNameToLink } from '../Routes';
import { Link } from 'react-router-dom';

class ItemThumbnail extends Component {
    render() {
        const {goatName, imgSrc} = this.props;
        return (<Link to={goatNameToLink(goatName)} className='item-thumbnail'>
                <p>{goatName}</p>
                <img src={imgSrc} alt={goatName} className='goat-image'/>
            </Link>);
    }
}

export default ItemThumbnail;