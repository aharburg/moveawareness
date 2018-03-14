// containers/Spreadsheet.js
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestSpreadsheet, receiveSpreadsheet, receiveSpreadsheetError } from '../actions/actions'
let URL = 'https://docs.google.com/spreadsheets/d/1coZh_S_FWxN16BYP5mXowwbOq9gaMQCcdUE8hkWZEsU/edit?usp=sharing'

// --- API ---
export function fetchTable() {
  // Code related to API here. Should just return a promise.
  // Someting like...
  return fetch(URL)
}

// --- Thunks ---
export function getSpreadsheetData() {
  return function (dispatch, getState) {
    // Tell reducers that you are about to make a request.
    dispatch(requestSpreadsheet())

    // Make the request, then tell reducers about
    // whether it succeeded or not.
    return fetchTable().then(
      data => dispatch(receiveSpreadsheet(data)),
      error => dispatch(receiveSpreadsheetError(error))
    )
  }
}

class Sheets extends Component {
  loadSpreadsheet(){
    return this.props.getSpreadsheetData();
  }

  render() {
    return (
      <div>
        {this.loadSpreadsheet()}
          {console.log(this.props.spreadsheetData)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    spreadsheetData: state.spreadsheetData,
    loading: state.loading,
    errorMsg: state.errorMsg
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getSpreadsheetData: getSpreadsheetData }, dispatch);
}

//
export default connect(mapStateToProps, mapDispatchToProps)(Sheets)
