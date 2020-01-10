//functional component

import React, { Component } from 'react';
import { NavLink, BrowserRouter, withRouter } from 'react-router-dom';

//Need to change App state from here and then it gets put into CategoriesNav same way with Gallery.

class CategoriesNav extends Component {
    
    state = {
        clickedContent: ''
    }

    clicked = (event) => {
        event.preventDefault();
        console.log(this.props.location.pathname.replace('/', ''));
        let routeName = this.props.location.pathname.replace('/', '');
        console.log(routeName);
        this.props.onClick(routeName);
    }
    
    render () {
        return (
            <BrowserRouter>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/horses" onClick={this.clicked.bind(this)}>#horses</NavLink></li>
                        <li><NavLink to="/cats" onClick={this.clicked.bind(this)}>#cats</NavLink></li>
                        <li><NavLink to="/dogs" onClick={this.clicked.bind(this)}>#dogs</NavLink></li>
                    </ul>
                </nav>
            </BrowserRouter>
        );      
    }
}

export default withRouter(CategoriesNav);