import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ExplanationDisplay extends Component {
  render(){
    return (
        <div>
          <h1> {this.props.nam} </h1>
          <img src={`./images/${this.props.nam}.png`}
          alt={this.props.nam} className="moveImage" />
          <p> <b> Definition: </b> {this.props.def}  </p>
          <p> <b> Synonyms: </b> {this.props.syn} </p>
          <p> <b> Explanation: </b> {this.props.exp} </p>
          <p> <b> Example: </b> {this.props.exa} </p>
          <br />
          {!this.props.fee ? null : <BackButton />}
        </div>
      )
    }
}

class BackButton extends Component{
  render(){
    return(
      <Button bsStyle='primary'>
        <Link to='/exercises' className='smallBtn'>
          Back to Exercises
        </Link>
      </Button>
    )
  }
}

export default ExplanationDisplay;
