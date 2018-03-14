import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { explainDefault } from '../actions/actions';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './header';
import '../styles/home.css';

class Home extends Component {
  render(){
    return (
      <div className="home" >
        <Header />
        <h1>Move Awareness</h1>
        <p>Move Awareness is a tool for understanding interpersonal interactions.
        By learning to identify the moves you will be able to understand
        and reduce interpersonal friction. Select the "Exercises" button
        to get started practicing. Select the "Overview" to get a high-level
        overview of the moves. </p>
        <br /><br />
        <Grid fluid={true}>
          <Row className="col-centered">
            <Col sm={2} xs={0}></Col>
            <Col sm={4} xs={6}>
              <Button bsStyle='primary'>
                <Link to='/exercises' className='largeBtn'>
                  Exercises
                </Link>
              </Button>
            </Col>
            <Col sm={4} xs={6}>
              <Button bsStyle='info'>
                <Link to='/explanation' className='largeBtn'
                >
                  Overview
                </Link>
              </Button>
            </Col>
            <Col sm={2} xs={0}></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ explainDefault: explainDefault }, dispatch);
}

export default connect(mapDispatchToProps)(Home);
