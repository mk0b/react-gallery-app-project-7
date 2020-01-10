//functional component

import React, { Component } from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';

//Need to change App state from here and then it gets put into CategoriesNav same way with Gallery.

export default class CategoriesNav extends Component {
    
    state = {
        clickedContent: ''
    }

    clicked = (event) => {
        event.preventDefault();
        //this.setState({ clickedContent: event.target.value });
        //console.log(this.state.clickedContent);
        //const routeName = event.target.value.replace('/', '');
        //console.log(routeName);
        this.props.onClick('horses');
    }
    
    render () {
        return (
            <BrowserRouter>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/horses" onClick={this.clicked.bind(this)}>#horses</NavLink></li>
                        <li><NavLink to="/cats">#cats</NavLink></li>
                        <li><NavLink to="/dogs">#dogs</NavLink></li>
                    </ul>
                </nav>
            </BrowserRouter>
        );      
    }
}