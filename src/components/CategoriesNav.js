//functional component
import React from 'react';
import { NavLink, HashRouter, Link } from 'react-router-dom';

const CategoriesNav = (props) => (
            <HashRouter>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink tag={Link} to="/horses" onClick={() => props.fetchData('horses')}>#horses</NavLink></li>
                        <li><NavLink tag={Link} to="/cats" onClick={() => props.fetchData('cats')}>#cats</NavLink></li>
                        <li><NavLink tag={Link} to="/dogs" onClick={() => props.fetchData('dogs')}>#dogs</NavLink></li>
                    </ul>
                </nav>
            </HashRouter>
        );

export default CategoriesNav;