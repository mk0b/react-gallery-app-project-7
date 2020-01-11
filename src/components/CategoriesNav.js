//functional component

import React, { Component } from 'react';
import { NavLink, BrowserRouter, withRouter } from 'react-router-dom';

class CategoriesNav extends Component {
    //TODO: Convert back to a functional component?
    
    render () {
        return (
            <BrowserRouter>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/horses" onClick={() => this.props.fetchData('horses')}>#horses</NavLink></li>
                        <li><NavLink to="/cats" onClick={() => this.props.fetchData('cats')}>#cats</NavLink></li>
                        <li><NavLink to="/dogs" onClick={() => this.props.fetchData('dogs')}>#dogs</NavLink></li>
                    </ul>
                </nav>
            </BrowserRouter>
        );      
    }
}

export default withRouter(CategoriesNav);