import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Glyphicon } from 'react-bootstrap';
import Sound from 'react-sound';
import { muteButton } from '../actions/actions';

let VOLUME;

class SoundResponse extends Component{

  toggleVolume(){
    VOLUME = (VOLUME === 100 ? 0 : 100 );
    console.log(VOLUME);
  }

  render(){
    return (
      <div>
      <Button bsSize="small" onClick={()=>this.props.muteButton(this.props.sound.volume)}>
        {(!this.props.sound.volume ? <Glyphicon glyph="volume-off" /> :
        <div> <Glyphicon glyph ="volume-up" /> <Sound
          url={`./sound/${this.props.sound.soundType}.mp3`}
          playStatus={Sound.status.PLAYING}
         playFromPosition={0}
         onLoading={this.handleSongLoading}
         onPlaying={this.handleSongPlaying}
         onFinishedPlaying={this.handleSongFinishedPlaying}
            type={"audio/mpeg"}
            controls={false}
            loop={false}
            preload={"auto"}
            autoPlay={true}
            volume={!this.props.sound.volume ? 0 : 100} />
            </div>
          )}
          </Button>
      </div>
    )
  }
};

function mapStateToProps(state){
  return{
    sound: state.sound
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ muteButton: muteButton }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundResponse);
