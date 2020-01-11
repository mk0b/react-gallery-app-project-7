//functional component

import React, { Component } from 'react';
import { NavLink, BrowserRouter, withRouter } from 'react-router-dom';

//Need to change App state from here and then it gets put into CategoriesNav same way with Gallery.

class CategoriesNav extends Component {

    state =  {

    }

    componentDidMount() {
        //event.preventDefault();
        this.setState({ isRefresh: true });
        console.log(this.props.location.pathname.replace('/', ''));
        let routeName = this.props.location.pathname.replace('/', '');
        console.log(routeName);
        let path = `/${routeName}`;
        this.props.history.push(path);
        this.props.fetchData(routeName);
        //this.refreshPage();
        //this.shouldComponentUpdate();
        //this.refresh();
    }

    
    render () {
        return (
            <BrowserRouter>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/horses" >#horses</NavLink></li>
                        <li><NavLink to="/cats">#cats</NavLink></li>
                        <li><NavLink to="/dogs">#dogs</NavLink></li>
                    </ul>
                </nav>
            </BrowserRouter>
        );      
    }
}

export default withRouter(CategoriesNav);