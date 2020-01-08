//functional component

import React from 'react';
import { Route, NavLink, Redirect, BrowserRouter } from 'react-router-dom';

const CategoriesNav = () => (
    <BrowserRouter>
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/horses">#horses</NavLink></li>
                <li><NavLink to="/code">#code</NavLink></li>
                <li><NavLink to="/hedgehogs">#hedgehogs</NavLink></li>
            </ul>
        </nav>
    </BrowserRouter>
);

export default CategoriesNav;