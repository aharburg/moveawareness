import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { explainData } from '../actions/actions';
import { buttonsArray } from '../reducers/buttonsReducer';

import Header from '../containers/header';
import '../styles/App.css'
import '../styles/home.css';
import ExplanationDisplay from '../components/explanationDisplay';

class Explanation extends Component {
  renderButtons(){
    return buttonsArray[22].options.map(function(button){
        return (
      <li
        key={button}
        className="listButton"
        >
        <button
          onClick={() => this.props.explainData(button) }
          id={button}
          className="moveButton">
          <div className="moveText">{button}</div>
        </button>
      </li> )
    }, this)
  }

    render(){
      return (
        <div>
          <Header />
          <div>
          <h1 id="centered"> Select a Move to Learn More </h1>
            <div id="centered">
              {this.renderButtons()}
            </div>

            {(!this.props.explain ? null : <ExplanationDisplay
              nam={this.props.explain.name}
              def={this.props.explain.definition}
              syn={this.props.explain.synonyms}
              exp={this.props.explain.explanation}
              exa={this.props.explain.example}
              fee={this.props.feedback}
              /> )}

              <StarterData />
          </div>
      </div>
    )
  }//Render
}//Component

class StarterData extends Component{
  render(){
    return (
      <div className='formatted'>
      <h1>Basic interpersonal Model</h1>
      <p>The challenge with all social interactions is that there
        are aspects that are visible and those that are not
        immediately knowable. An individual’s intentions and
        motivations behind a certain action are ultimately
        only knowable to them, and sometimes not even
        then! Friction can occur when visible actions are
        misinterpreted or experienced differently than intended.
        This model is designed to bring greater clarity to
        everyday interactions through a simplified vocabulary.
        A simplified view of the context in which all interactions
        occur has at least two people. The person acting has
        an intention, knowable only to them, an action which
        proceeds from that intention, and one or more perceiver
        who interprets that action. That perceiver then has
        a reaction with the same dynamic. We will get into
        greater detail about how perception works further down.
        However this model should be kept in mind as we
        discuss the moves. </p>

      <h1>The Six Moves</h1>
      <p>Language serves as a bridge between minds. When it
        comes to our emotional life there is a danger in having
        the language obscure the actual emotional experience
        by becoming too abstract. This model includes six
        “moves” which are categories of action. These six moves
        were developed with intentionally to be a bit broad, while
        being visceral, to avoid over-intellectualization. They
        don’t cover all possible human interaction, but more than
        enough for everyday occurrences. Furthermore, they are
        ethically neutral descriptors. It’s important to understand
        that it is the context which determines the moral value of
        them, not the moves themselves. We will broadly define
        them and then cover how they can be used to help
        facilitate communication. </p>
      </div>
      )
   }
}

function mapStateToProps(state){
  return{
    explain: state.explanation,
    feedback: state.feedback
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ explainData: explainData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Explanation);
