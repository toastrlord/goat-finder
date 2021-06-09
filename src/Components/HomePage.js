import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return <div>
            <h1>Welcome to Goat Finder!</h1>
            <p>Find your goat today!</p>
            <Link to='/shop'>Shop!</Link>
            <Link to='/about'>About Us</Link>
        </div>;
    }
}

export default HomePage;