//functional component

import React from 'react';
import { Route, NavLink, Redirect, BrowserRouter } from 'react-router-dom';
import horseData from '../data/horsesData';

import Gallery from './Gallery';

//Need to change App state from here and then it gets put into CategoriesNav same way with Gallery.

const CategoriesNav = (props) => (
    <BrowserRouter>
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/horses">#horses</NavLink></li>
                <li><NavLink to="/cats">#cats</NavLink></li>
                <li><NavLink to="/dogs">#dogs</NavLink></li>
            </ul>
        </nav>
    </BrowserRouter>
);

export default CategoriesNav;