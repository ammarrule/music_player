// FEEDBACK:
// 1) Not bad, Ammar. Couple of things:
// - You missed the play button next to the song list items.
// - Also your music doesn't play when you hit next. It should automatically.
// - The code you have in your componentDidUpdate actually doesn't do anything because you never change the state of playing.
// So as of right now, that state is also unnecessary.

// - Thuy

import React, { Component } from 'react';
import SongDetails from './components/SongDetails.js';
import SongList from './components/SongsList.js';
import { Link } from 'react-router';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentSongIndex: 0,
      currentSongTime: 0,
      duration: 0
    }

    //BINDING//------------------------------------------------------------------------------------------------------------------------------
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.intervalTicker = this.intervalTicker.bind(this);
  }

  //METHODS//----------------------------------------------------------------------------------------------------------------------------- 

  playSong() {
    let player = document.getElementById("musicPlayer");
    player.play()
  }

  pauseSong() {
    let player = document.getElementById("musicPlayer");
    player.pause()
  }

  stopSong() {
    let player = document.getElementById("musicPlayer");
    player.pause();
    player.currentTime = 0
  }

  next() {
    this.setState({
      currentSongIndex: this.state.currentSongIndex + 1
    })
  }

  previous() {
    this.setState({
      currentSongIndex: this.state.currentSongIndex - 1
    })
  }

  intervalTicker() {
    let player = document.getElementById("musicPlayer");
    this.setState({
      currentSongTime: player.currentTime,
      duration: player.duration
    })
  }

  componentWillMount() {
    setInterval(this.intervalTicker
    , 100)
}

// RENDER and RETURN//------------------------------------------------------------------------------------------------------------------

render() {
  const songs = this.props.route.songs;
    return (
    <div className="App">
      <nav className="navbar navbar-default nav-bar">
        <h1 className="main-title">BaumBiit</h1>
        <i className="fa fa-headphones logo" aria-hidden="true"></i>   
        <marquee className="marquee"> Made Using &nbsp;&nbsp;&nbsp;<span><i className="fa fa-html5" aria-hidden="true"></i></span>&nbsp;&nbsp;&nbsp;<span><i className="fa fa-css3" aria-hidden="true"></i></span>&nbsp;&nbsp;&nbsp;<span>JS</span></marquee>     
      </nav>
      <div className="container">
        <div className="audio-wrapper">
          <h1>{songs[this.state.currentSongIndex].title}</h1>
          <div className="album-img thumbnail"><img src="http://www.dl-digital.com/smalls/Rosette64-Reweighed-st1-work-LuminanceBlendsLast2square.jpg"></img></div>
          <div className="btn-aud-wrapper">
            <div className="time-over-duration"><p className="time-digits">{(this.state.currentSongTime).toFixed(2)} / {Math.round(this.state.duration)}</p></div>
            <audio className="audio-player"
              src={songs[this.state.currentSongIndex].source}
              id="musicPlayer"
              >
              {songs[this.state.currentSongIndex].title}
            </audio>
            <div className="btn-wrapper">
              <button onClick={this.previous} disabled={this.state.currentSongIndex <= 0} className="btn btn-primary"><i className="fa fa-backward" aria-hidden="true"></i></button>
              <button onClick={this.playSong} disabled={false} className="btn btn-success"><i className="fa fa-play" aria-hidden="true"></i></button>
              <button onClick={this.pauseSong} className="btn btn-primary"><i className="fa fa-pause" aria-hidden="true"></i></button>
              <button onClick={this.stopSong} disabled={false} className="btn btn-danger"><i className="fa fa-stop" aria-hidden="true"></i></button>
              <button onClick={this.next} disabled={this.state.currentSongIndex >= songs.length - 1} className="btn btn-primary"><i className="fa fa-forward" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        <div className="chillun">
          {React.cloneElement(this.props.children, {songs})}   
        </div>              
      </div>     
      <div className="divider">
         <div className="logo-wrapper">       
            <a><i className="fa fa-facebook-square fb-icon" aria-hidden="true"></i></a>
            <a><i className="fa fa-twitter-square twitter-icon" aria-hidden="true"></i></a>
            <a><i className="fa fa-instagram insta-icon" aria-hidden="true"></i></a>
            <a><i className="fa fa-spotify spotify-icon" aria-hidden="true"></i></a>
            <a><i className="fa fa-envelope-o mail-icon" aria-hidden="true"></i></a>      
          </div>    
      </div>  
    </div>
  );
}
}

export default App;
