import React from 'react';
import apiInfo from '../config';
import axios from 'axios';

//TODO: Use prevstate?

const horseData = () => {
    //storing the call in a variable to make it cleaner
    const apiSearchCall = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiInfo.key}&tags=horses&per_page=24&format=json&nojsoncallback=1`;
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

    console.log(this.state.photos);
}

export default horseData;