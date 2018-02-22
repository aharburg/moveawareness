import React, { Component } from 'react';
import { reset } from '../actions/actions';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExerciseData from '../reducers/exerciseData';
import SoundResponse from './soundResponse';
import ProgressBar from '../components/progressBar';

class Footer extends Component{
  render(){
    return (
      <div className="panel panel-footer footerControls ">
        <Grid className="col-centered" fluid={true}>
          <Row className="show-grid">
            <Col sm={1} xs={2}>
              <SoundResponse />
            </Col>
            <Col sm={2} xs={3}>
              Progress:
            </Col>
            <Col sm={7} xs={4}>
              <ProgressBar total={ExerciseData.length}
              current={this.props.level.CurrentLevel} />
            </Col>
            <Col sm={2} xs={2}>
              <button onClick={()=>this.props.reset()}
              type="button"
              className="btn btn-danger">Reset</button>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    level: state.level,
    sound: state.sound
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ reset: reset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
