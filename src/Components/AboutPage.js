import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TestimonialComponent from './TestimonialComponent';

class AboutPage extends Component {
    render() {
        return <div>
            <h1>About Us</h1>
            <Link to='/store'>Store</Link>
            <Link to='/checkout'>Checkout</Link>
            <p>
                At Goat Finder, our number one goal is to find the perfect goats for YOU! With affordable prices and the highest quality goats, anyone can become a proud goat owner today!
                Don't just take our word for it, hear from our satisfied customers!
            </p>
            <TestimonialComponent author='Larry G' quote='I knew I wanted a goat, but had no idea which one! The good people at Goat Finder helped me find the right goat for me!' />
        </div>
        
    }
}

export default AboutPage;