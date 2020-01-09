//functional component
import React from 'react';
import Photo from './Photo';
import NoSearchResults from './NoSearchResults';

//construct the calls to get the Photo Source URLs from the data we get back: https://www.flickr.com/services/api/misc.urls.html


const Gallery = (props) => {
    //store vairables
    const results = props.data;
    console.log(results);
    let photos;
    
    //TODO: Fix this section. I can't search because it wont let me access the search bar because of the errors
    // but I think the errors are happening because my results are blank because I have not been able to search yet.


    photos = results.map(photo => {
        const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`; 
        console.log(url);
        return (
            <Photo url={url} key={photo.id} />
        );
    });


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