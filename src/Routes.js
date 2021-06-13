import React from 'react';
import { HashRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import ShopPage from './Components/ShopPage';
import ShopItem from './Components/ShopItem';
import NavBar from './Components/NavBar';
import CheckoutPage from './Components/CheckoutPage';
import goats from '.';
import AboutPage from './Components/AboutPage';

function goatNameToLink(goatName) {
    return '/shop/'.concat(goatName.replace(' ', '_'));
}

const Routes = () => {
    return (
        <div id='main-display'>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div id='top-bar'>
                    <Link to='/shop'>
                        <img src={process.env.PUBLIC_URL + '/images/goatfinder_logo_smaller.png'} alt='goat finder logo' className='logo'/>
                    </Link>
                    <NavBar />
                </div>
                <div id='page-content' style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
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
            </HashRouter>
        </div>
    );
};

export {Routes, goatNameToLink};