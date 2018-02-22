import React, { Component } from 'react';
import { Twemoji } from 'react-emoji-render';

class EmojiDisplay extends Component {

  render(){
    if(!this.props.emoji){
      return null;
    }
    if(typeof this.props.emoji === 'number' && this.props.emoji.length !== 0 ){
      return (
        <div>
          <img src={`./images/${this.props.emoji}.png`}
          className="explanationImage" alt="explanationImage"/>
        </div>
      )
    } else return (
        <div className="emojiUni">
          <Twemoji svg text={String.fromCodePoint(this.props.emoji)} />
        </div>
    )
  }
};

export default EmojiDisplay;
