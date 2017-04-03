import React, {Component} from 'react';
import {Link} from 'react-router';

class SongDetails extends Component {
    
    render() {              
        return (
            <div className="song-detail-wrapper">                 
                <h1 className="song-details-title">Song Details</h1>
                <h2 className="song-title">{this.props.songs[this.props.params.songIndex].title}</h2>
                <p className="song-detail">{this.props.songs[this.props.params.songIndex].description}</p>     
                <Link to = "/songs"><button className="btn btn-primary song-list-btn">Song List</button></Link>           
            </div>
        )
    }
}

export default SongDetails;