import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './Components/ShopPage';
import ShopItem from './Components/ShopItem';
import CheckoutPage from './Components/CheckoutPage';
import CartBar from './Components/CartBar';
import goats from '.';
import AboutPage from './Components/AboutPage';

function goatNameToLink(goatName) {
    return '/'.concat(goatName.replace(' ', '_'));
}

const Routes = () => {
    return (
        <BrowserRouter>
            <a href='/shop'>
                <img src={'images/goatfinder_logo_smaller.png'} alt='goat finder logo' className='logo'/>
            </a>
                <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                    <Switch style={{flex: 4}}>
                        <Route exact path='/'> 
                            <Redirect to='/shop' />
                        </Route>
                        <Route exact path='/about' component={AboutPage} />
                        <Route exact path='/shop' component={ShopPage} />
                        <Route exact path='/checkout' component={CheckoutPage}/>
                        {
                            Object.keys(goats).map((goatName, index) => {
                                const goatLink = goatNameToLink(goatName);
                                return <Route exact path={goatLink} key={index}>
                                    <ShopItem itemName={goatName} goatInfo={goats[goatName]} />
                                </Route>
                            })
                        }
                    </Switch>
                </div>
            <CartBar/>
        </BrowserRouter>
    );
};

export {Routes, goatNameToLink};