import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextRound } from '../actions/actions';

import EmojiDisplay from '../components/emojiDisplay';
import VideoDisplay from '../components/videoDisplay';
import ButtonDisplay from './buttonDisplay';
import FeedbackDisplay from '../components/Feedback';

class Media extends Component{
  render(){
    return (
      <div className="mainAppBody">
        <div className="text-center">
          <h3>{this.props.round.text}</h3>
          {this.props.round.video ? <VideoDisplay /> :
            <EmojiDisplay emoji={this.props.round.emoji} />}
          {!this.props.feedback ? null :
            <FeedbackDisplay selected={this.props.feedback.selected}
            correct={this.props.feedback.correct} /> }
          <ButtonDisplay />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    round: state.round,
    score: state.score,
    feedback: state.feedback,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ nextRound: nextRound}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Media);
