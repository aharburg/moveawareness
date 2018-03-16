// containers/Spreadsheet.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSpreadsheetData } from "../actions/actions";

class Sheets extends Component {
  loadSpreadsheet() {
    return this.props.getSpreadsheetData();
  }

  render() {
    return (
      <div>
        {this.loadSpreadsheet()}
        {console.log(this.props.spreadsheetData)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    spreadsheetData: state.spreadsheetData,
    loading: state.loading,
    errorMsg: state.errorMsg
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getSpreadsheetData: getSpreadsheetData },
    dispatch
  );
}

//
export default connect(mapStateToProps, mapDispatchToProps)(Sheets);
