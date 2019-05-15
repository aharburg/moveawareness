import React, { Component } from 'react';

class ProgressBar extends Component{
  render(){
      let progressNum = calculator(this.props.current, this.props.total)
      console.log(this.props.current);//Assign percentage
    return (
        <div className="progressBarContainer ">
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: progressNum + '%'}}>
              <span className="sr-only"></span>
            </div>
          </div>
        </div>
    )
  }
}
//This function calculates the percentage
function calculator(current, total){
  return (current > 1 ? Math.round((current/total) * 100): 0)
//If greater than one, return percentage
}

export default ProgressBar;
