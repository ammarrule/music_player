import React, { Component } from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
        const songs = this.props.songs;        
        let newsongs = songs.map((song, index) => {
                return (
                    <div>
                        <h3 className="song-list"><Link style={{textDecoration: 'none'}} to={"/songs/" + index}>{song.title}</Link></h3>
                    </div>
                )
            })
        
        return (
            <div>
                <h2 className="song-list-title">Song List</h2>
                {newsongs}
            </div>
        )
    }
}

export default SongsList;