import React, { Component } from 'react';
import YoutubePlayer from 'react-youtube-player';
import { connect } from 'react-redux';


class VideoDisplay extends Component{
render() {
  if(!this.props.round.video){
    return <br />
  }


  return (
    <YoutubePlayer
      videoId={this.props.round.video}
      playbackState='unstarted'
      configuration={
           {
               showinfo: 0,
               controls: 0,
               rel: 0,
               modestbranding: 1
           }
       }
       />
     );
  }
}

function mapStateToProps(state){
  return{
    round: state.round
  };
}

export default connect(mapStateToProps)(VideoDisplay);
