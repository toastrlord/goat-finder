import React, {Component} from 'react';
import TestimonialComponent from './TestimonialComponent';

class AboutPage extends Component {
    render() {
        return <div>
            <h1>About Us</h1>
            <p style={{marginLeft: '15%', marginRight: '15%'}}>
                At Goat Finder, our number one goal is to find the perfect goats for YOU! With affordable prices and the highest quality goats, anyone can become a proud goat owner today!
                Don't just take our word for it, listen to our satisfied customers!
            </p>
            <TestimonialComponent author='Larry G' quote='I knew I wanted a goat, but had no idea which one! The good people at Goat Finder helped me find the right goat for me!' />
            <TestimonialComponent author='Sarah M' quote='I was amazed at the selection of goats available! I had to get one of each! Thanks Goat Finder!'/>
            <TestimonialComponent author='A Goat' quote='baaaaaaAAAAAAAaaaaaaaa' />
        </div>
        
    }
}

export default AboutPage;