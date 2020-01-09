//functional component
import React from 'react';
import Photo from './Photo';
import NoSearchResults from './NoSearchResults';

//construct URLs for the Photo Source URLs from the data we get back: https://www.flickr.com/services/api/misc.urls.html
//display the URL's to the <Photo /> component or if the array is empty display no results found.
//TODO: Remove the "this is the gallery" for testing.
//TODO: Get props down for the title of the page for specific routes.

const Gallery = (props) => {
    //store vairables
    const results = props.data;
    console.log(results);
    //console.log('Match: ', props.match.params.search);
    //const title = props.match.params.search;
    let photos;

    if (results.length > 0) {
        photos = results.map(photo => {
            const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`; 
            console.log(url);
            return (
                <Photo url={url} key={photo.id} />
            );
        });
    } else {
        photos = <NoSearchResults />
    }
    //TODO: Make a ternary if statement if a title prop exists add it if not leave out the h1
    //{title}
    return (
        <div className="photo-container">
            <h1> Gifs</h1>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default Gallery;