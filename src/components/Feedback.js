import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import FeedbackDismissable from '../containers/FeedbackDismissable';

class FeedbackDisplay extends Component{
  render(){

    return(
      <div>
      <br />
      <Grid className="col-centered">
        <Row className="show-grid">
          <Col xs={6} sm={6}>
            <h3>You chose:</h3>
          </Col>
          <Col xs={6} sm={6}>
            <h3>We intended:</h3>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} sm={6}>
            <button
              id={this.props.selected}
              className="moveButton">
              <div className="moveText">{this.props.selected}</div>
            </button>
          </Col>
          <Col xs={6} sm={6}>
            <button
              id={this.props.correct}
              className="moveButton">
              <div className="moveText">{this.props.correct}</div>
            </button>
          </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} sm={12}>
            <br />
              <FeedbackDismissable button1={this.props.selected} button2={this.props.correct} />
            </Col>
          </Row>
      </Grid>
      </div>
    )
  }
}

export default FeedbackDisplay;
