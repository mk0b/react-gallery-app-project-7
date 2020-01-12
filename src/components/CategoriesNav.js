//functional component
import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

const CategoriesNav = (props) => (
            <BrowserRouter>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/horses" onClick={() => props.fetchData('horses')}>#horses</NavLink></li>
                        <li><NavLink to="/cats" onClick={() => props.fetchData('cats')}>#cats</NavLink></li>
                        <li><NavLink to="/dogs" onClick={() => props.fetchData('dogs')}>#dogs</NavLink></li>
                    </ul>
                </nav>
            </BrowserRouter>
        );

export default CategoriesNav;