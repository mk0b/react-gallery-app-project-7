//stateful class component
import React, { Component } from 'react';
import '../css/index.css';
import axios from 'axios';

//importing components
import SearchBar from './SearchBar';
import CategoriesNav from './CategoriesNav';
import Gallery from './Gallery';
import NotFound from './NotFound';
//Where should I put the No results for the search?

export default class App extends Component {
  
  constructor() {
    //binding this to this class
    super();
    //setting state to make a place for the Flickr data to go
    this.state = {
      photos: [],
      loading: true
    }
  }

  //create a component did mount here?

  //method to search the Flickr API from the search form in SearchBar.js
  //creating it as an arrow function to auto bind this keyword.
  search = (query) => {

  }
  
  render() {
    console.log(this.state.photos);
    return (
      <div className="container">
        <SearchBar />
      </div>
    );
  }

}

//Putting my TODO's here
//TODO: Test!
//TODO: Fill out Read.me file.
//TODO: Clean up comments
//TODO: Remove tests.

//TODO: Build Components - Use the mockups as a general guide to create components.

//Stateless functional components with props for:
// - Photo Component
// - Nav Component
// - NotFound Component - 404 Exceeds

//Stateful class components;
// - Search
// - Photo Container

//TODO: Get a Flickr API Key - refer to directions for project. Create special data file.
//TODO: Fetch the Flickr Data
//TODO: Set up routes.
//TODO: Create Search - Search for photos with the Flickr API endpoint for searching.
//TODO: App should display at least 3 default topic links that return a list of photos matching some criteria.
//TODO: Use axios? or fetch api
//TODO: Display the data. Make sure to include a key so there are no warnings.
//TODO: No more than 24 images displaying.

//TODO: Exceeds if no matches are found in search, include a message to tell the user there are no matches.
//TODO: Exceeds - Add a loading indicater when pages are loading/data is fetching.