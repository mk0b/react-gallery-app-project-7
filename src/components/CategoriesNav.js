//functional component

import React from 'react';
import { Route, NavLink, Redirect, BrowserRouter } from 'react-router-dom';
import horseData from '../data/horsesData';

import Gallery from './Gallery';

const CategoriesNav = (props) => (
    <BrowserRouter>
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/horses">#horses</NavLink></li>
                <li><NavLink to="/code">#code</NavLink></li>
                <li><NavLink to="/hedgehogs">#hedgehogs</NavLink></li>
            </ul>

            <Route path="/horses" render={ () => <Gallery data={horseData} />} />
        </nav>
    </BrowserRouter>
);

export default CategoriesNav;