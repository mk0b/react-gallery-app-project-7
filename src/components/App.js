//stateful class component
import React, { Component } from 'react';
import '../css/index.css';
import axios from 'axios';
import apiInfo from '../config';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//importing components
import SearchBar from './SearchBar';
import CategoriesNav from './CategoriesNav';
import Gallery from './Gallery';
import NotFound from './NotFound';

export default class App extends Component {
  
  constructor(props) {
    //binding this keyword to this class
    super(props);
    //setting state to make a place for the Flickr data to go
    this.state = {
      photos: [],
      queryContent: '',
      loading: true
    }
  }

  //method to search the Flickr API from the search form in SearchBar.js
  //creating it as an arrow function to auto bind this keyword.
  search = (query) => {
    //storing the call in a variable to make it cleaner
    const apiSearchCall = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiInfo.key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

    //api call
    axios.get(apiSearchCall)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          queryContent: query,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data: ', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchBar onSearch={this.search} />
          <CategoriesNav fetchData={this.search} />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/horses" />} />
            <Route exact path="/search/:searchtext" render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryContent} loading={this.state.loading} fetchData={this.search} />} />
            <Route path="/(horses|cats|dogs)" render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryContent} loading={this.state.loading} fetchData={this.search} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

//Putting my TODO's here
//TODO: Test!
//TODO: Fill out Read.me file. LOL…please don’t forget to update your README with how to setup the config.js file that way if someone whether it is here within the TechDegree or a future employer goes to install the app they know how it should be configured to run.
//TODO: Clean up comments
//TODO: Remove tests.