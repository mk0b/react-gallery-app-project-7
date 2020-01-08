//stateful class component
import React, { Component } from 'react';
import '../css/index.css';
import axios from 'axios';
import apiInfo from '../config';

//importing components
import SearchBar from './SearchBar';
import CategoriesNav from './CategoriesNav';
import Gallery from './Gallery';
import NotFound from './NotFound';
import { BrowserRouter, Route } from 'react-router-dom';
//Where should I put the No results for the search?

export default class App extends Component {
  
  constructor() {
    //binding this keyword to this class
    super();
    //setting state to make a place for the Flickr data to go
    this.state = {
      photos: [],
      loading: true
    }
  }

  //TODO: create a component did mount here?

  //method to search the Flickr API from the search form in SearchBar.js
  //creating it as an arrow function to auto bind this keyword.
  search = (query) => {
    //storing the call in a variable to make it cleaner
    const apiSearchCall = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiInfo.key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    console.log('API Call: ', apiSearchCall);

    //initial call
    axios.get(apiSearchCall)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data: ', error);
      });
  }
  
  render() {
    console.log(this.state.photos);
    return (
        <div className="container">
          <SearchBar onSearch={this.search}/>
          <CategoriesNav />
          <Gallery data={this.state.photos} />
        </div>

    );
  }

}

//Putting my TODO's here
//TODO: Test!
//TODO: Fill out Read.me file.
//TODO: Clean up comments
//TODO: Remove tests.
//TODO: Cleanup any unused assets.

//TODO: Build Components - Use the mockups as a general guide to create components.

//Stateless functional components with props for:
// - Photo Component
// - Nav Component
// - NotFound Component - 404 Exceeds

//Stateful class components;
// - Search
// - Photo Container

//TODO: Fetch the Flickr Data
//TODO: Set up routes.
//TODO: App should display at least 3 default topic links that return a list of photos matching some criteria.
//TODO: Display the data. Make sure to include a key so there are no warnings.
//TODO: No more than 24 images displaying.

//TODO: Exceeds if no matches are found in search, include a message to tell the user there are no matches.
//TODO: Exceeds - Add a loading indicater when pages are loading/data is fetching.
