import React, { Component } from 'react';
import { reset, explainData } from '../actions/actions';
import { Grid, Row, Col, Glyphicon, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header className="App-header">
          <Grid>
            <Row>
              <Col sm={2} xs={3} >
                <Button>
                  <Link to="/">
                    <Glyphicon glyph="home" />
                  </Link>
                </Button>
              </Col>
              <Col sm={8} xs={6}>
                <h1 className="App-title">Move Awareness</h1>
                </Col>
              <Col sm={2} xs={3}>
              <Link
                  to="/explanation" >
                <Button bsStyle="info">
                  <Glyphicon glyph="info-sign" />
                </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col sm={4} xs={4}>
                <h4>Level: {this.props.level.CurrentLevel} </h4>
              </Col>
              <Col sm={4} xs={4}>
                <h4> Exercise: {this.props.level.CurrentRound >= 0 ?
                    this.props.level.CurrentRound : 0}
                </h4>
              </Col>
              <Col sm={4} xs={4}>
                <h4 > Match: {this.props.score}/44
                </h4>
              </Col>
            </Row>
        </Grid>
      </header>
    )
  }
}

function mapStateToProps(state){
  return{
    round: state.round,
    score: state.score,
    level: state.level,
    explain: state.explanation,
    router: state.router
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ reset: reset, explainData: explainData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
