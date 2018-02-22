import React from 'react';
import {Component} from 'react';
import {Button, Alert, Grid, Row, Col} from 'react-bootstrap';
import {explainData} from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class FeedbackDismissable extends Component {
  constructor(props) {
    super(props);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false,
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert onDismiss={this.handleDismiss}>
        <Grid>
          <Row>
            <Col sm={2}>
              <Link onClick={()=>this.props.explainData(this.props.button1)}
              to='/explanation'>
            <img src={`./images/${this.props.button1}.png`}
            className="centered" alt={this.props.button1}/>
            </Link>
            </Col>
            <Col sm={8}>
            <div className="middle">
              {moveDefinitions[this.props.button1]} <br /> To learn more select the
              move icon.
            </div>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
            <Link onClick={()=>this.props.explainData(this.props.button2)}
            to='/explanation'>
          <img src={`./images/${this.props.button2}.png`}
          className="centered" alt={this.props.button2} />
          </Link>
            </Col>
            <Col sm={8}>
            <div className="middle">
              {moveDefinitions[this.props.button2]} <br /> To learn more select the
              move icon.
            </div>
            </Col>
          </Row>
        </Grid>
          <p>
            <Button className="btn" onClick={this.handleDismiss}>Hide</Button>
            <br />
          </p>
        </Alert>
      );
    }
    return <Button onClick={this.handleShow}>Learn More</Button>;
  }
}


const moveDefinitions = {
  pain: 'A Pain move is meant to produce physical or emotional displeasure. ',
  please: 'A Please move is to produce physical or emotional delight.',
  pause: 'A Pause move is to evade or delay.',
  place: 'A Place move is to act without intending to produce any action or reaciton.',
  push: 'A Push move is to forcefully motivate someone to act a certain way.',
  pull: 'A Pull move is to pleasently motivate someone to act a certain way.'
}

function mapStateToProps(state){
  return{
    explain: state.explanation
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ explainData: explainData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackDismissable);
