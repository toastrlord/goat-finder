import React, { Component } from 'react';
import CartBar from './CartBar';

class HomePage extends Component {
    render() {
        return <div>
            <h1>Welcome to Goat Finder!</h1>
            <p>Find your goat today!</p>
            <a href='/shop'>Shop!</a>
            <a href='/about'>About Us</a>
        </div>;
    }
}

export default HomePage;