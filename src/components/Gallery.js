//functional component
import React, { Component } from 'react';
import Photo from './Photo';
import NoSearchResults from './NoSearchResults';

//construct URLs for the Photo Source URLs from the data we get back: https://www.flickr.com/services/api/misc.urls.html
//display the URL's to the <Photo /> component or if the array is empty display no results found.
//TODO: Make a ternary statement to show the default page title or the dynamic page title.

const Gallery = (props) => {
    //store vairables
    const results = props.data;
    console.log(results);
    let photos;
    console.log('Match: ', props.match.params.searchtext);
    const title = props.match.params.searchtext;


    //TODO: Make a bigger if statement here where they all say if results.length is greater than 0 AND props.match.url??
    if (results.length > 0) {
        photos = results.map(photo => {
            const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
            return (
                <Photo url={url} key={photo.id} />
            );
        });
    } else {
        photos = <NoSearchResults />
    }

    return (
        <div className="photo-container">
            <h1 className="gallery-h1">  {title} Gifs</h1>
            <hr className="gallery-line" />
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default Gallery;