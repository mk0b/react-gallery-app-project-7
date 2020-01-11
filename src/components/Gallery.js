//functional component
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';
import NoSearchResults from './NoSearchResults';

//construct URLs for the Photo Source URLs from the data we get back: https://www.flickr.com/services/api/misc.urls.html
//display the URL's to the <Photo /> component or if the array is empty display no results found.

class Gallery extends Component {

    componentWillMount() {
        let routeName = this.props.location.pathname.replace('/', '');
        this.props.fetchData(routeName);
    }

    render() {
        //store vairables
        const results = this.props.data;
        console.log(results);
        let photos;
        console.log('Match: ', this.props.match.params.searchtext);
        const title = this.props.query.charAt(0).toUpperCase() + this.props.query.slice(1);
        
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
                {
                    (this.props.loading)
                    ? <p className="loading">Loading...</p>
                    :                
                    <Fragment>
                        <h1 className="gallery-h1">  {title} </h1>
                        <hr className="gallery-line" />
                        <ul>
                            {photos}
                        </ul>
                    </Fragment>
                }
            </div>
        );
    }
}

export default withRouter(Gallery);