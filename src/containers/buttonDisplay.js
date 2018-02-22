import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextRound, correctResponse, incorrectResponse, reset } from '../actions/actions';
import { bindActionCreators } from 'redux';
import ExerciseData from '../reducers/exerciseData';

class ButtonDisplay extends Component {
  nextUp(array){
    let x = ExerciseData[array[0]]
    let y = ExerciseData;

    if( array[1] < x.length -1 ){
      let newNumb = array[1] + 1;
      let nextRoundId = [array[0], newNumb];

      console.log(nextRoundId);
      return nextRoundId;
    }

    else if (array[0] < y.length -1) {
        let newNumb = array[0] + 1;
        let nextRoundId = [newNumb, 0];

      return nextRoundId;
      }
    return [0,0];
  }//This function passes on the next level and round to the actions

  buttonAction(button){
    if(button === "next"){
      return this.props.nextRound(this.nextUp([this.props.level.CurrentLevel,
        this.props.level.CurrentRound]));
    } else if(button === this.props.round.correctAnswer){
      let nextArray = this.nextUp([this.props.level.CurrentLevel,
        this.props.level.CurrentRound]);
        return this.props.correctResponse(nextArray);
    } else {
        return this.props.incorrectResponse([this.props.level.CurrentLevel,
          this.props.level.CurrentRound], button, this.props.round.correctAnswer);
    }
  }
  //Button Action evaluates the next action to be taken

  renderButtons(){
    if(this.props.buttons.options === "next"){
      return (
        <li
          key={"next"}
          >
          <button
            type="button"
            onClick={() => this.buttonAction("next")}
            className="btn btn-primary">Next</button>
        </li>
      )
    }// Next button
    else if(this.props.buttons.options === 'reset'){
      return (<button onClick={()=>this.props.reset()}
      type="button"
      className="btn btn-danger">Reset</button>)
    }

    else  {
      return this.props.buttons.options.map(function(button){
          return (
        <li
          key={button}
          className="listButton"
          >
          <button
            onClick={() => this.buttonAction(button) }
            id={button}
            className="moveButton">
            <div className="moveText">{button}</div>
          </button>
        </li> )
      }, this); //Move button
    }
  }//End renderButtons
  //This function maps through the buttons

render()
  {
    return (
      <div>
        <ul className="buttonUl" >
          {this.renderButtons()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    round: state.round,
    score: state.score,
    level: state.level,
    buttons: state.buttons
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ nextRound: nextRound,
    correctResponse: correctResponse, incorrectResponse: incorrectResponse,
    reset: reset }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDisplay);
