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
      loading: true
    }
  }
  
  //TODO: use prevstate to make sure everything gets updated correctly when using state.

  componentDidMount() {
    
  }

  //make this call get triggered in CategoriesNav onlcick it will update the state and then
  //use this.state.photos in the component rendering down below.

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

  //TODO: Make a call for the different paths in methods up here and store it in an array and pass those through as data depnding on the route that is selected.

  //TODO: Fix the route if you search again after searching it adds a /search to it.
  
  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchBar onSearch={this.search} />
          <CategoriesNav onClick={this.search} />
          
        <Switch>
          <Route exact path="/" render={ () => <Redirect to="/horses" />} />
          <Route path="/search/:searchtext" render={ (props) => <Gallery {...props} data={this.state.photos} />} />
          <Route path="/horses" render={ (props) => <Gallery {...props} data={this.state.photos} />} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
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
