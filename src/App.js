import React from 'react';

import logo from './logo.svg';
import './App.css';
import Sound from 'react-sound';
import soundfile from './sound/media.io_80s-Bdrum1.mp3'
import soundfile1 from "./sound/media.io_80s-COWBELL1.mp3"


class MyComponentWithSound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'STOPPED',
      file: soundfile
    }
    this.submitMessage = this.submitMessage.bind(this)
  }

  submitMessage(e){
console.log("AAAAAAAAAAAAAA    "+  e);
this.setState({
  status: 'PLAYING'
})
}
  render() {
    return(<div>
      <audio  src={soundfile1}>
        Your browser does not support the HTML5 audio element.
    </audio>
     <Sound url={this.state.file}
      playStatus={this.state.status}
      playFromPosition={0 }
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying} />
      <button onClick = {this.submitMessage} >Drum 1</button>
      <button onClick = {this.submitMessage} >Drum 2</button>
      <AudioPlayer/>
      <MyComponent/>
      
      </div>)
  }
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}


class App extends React.Component {

render() {
  return (  
    <MyComponentWithSound/>   
  );
}
}
class AudioPlayer extends React.Component {
    constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
func(){
console.log("BBBBBBBBBBBBB"+this.myRef.current);

}

  render() {
    return (
      <button onClick = {this.func} >aaaaa
        <audio ref={this.myRef} src="./sound/media.io_80s-COWBELL1.mp3" />
      </button>
    );
  }
}

export default App;
