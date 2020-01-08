//functional component
import React from 'react';
import Photo from './Photo';
import NoSearchResults from './NoSearchResults';

//construct the calls to get the Photo Source URLs from the data we get back: https://www.flickr.com/services/api/misc.urls.html


const Gallery = props => {
    //store vairables
    const results = props.photos;
    console.log(results);
    let photos;
    
    //TODO: Fix this section. I can't search because it wont let me access the search bar because of the errors
    // but I think the errors are happening because my results are blank because I have not been able to search yet.
    if (results.length > 0) {
        //build urls
        results.map(result => {
            const url = `https://farm${result.farm}}.staticflickr.com/${result.server}/${result.id}_${result.secret}_c.jpg`;
            photos = <Photo url={url} key="result.id" />;
        });
    } else {
        photos = <NoSearchResults />
    }

    //put in an if statement to check for no results

    //return UL
    return (
        <div className="photo-container">
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default Gallery;