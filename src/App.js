import React from 'react';

import logo from './logo.svg';
import './App.css';
import Sound from 'react-sound';
import soundfile from './sound/rain.mp3'




class App extends React.Component {

render() {
  return (
    <Sound
      url={soundfile}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 }
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  );
}
}


export default App;
