// containers/Spreadsheet.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSpreadsheetData } from "../actions/actions";
import EmojiDisplay from "../components/emojiDisplay";
import Header from './header'
import ButtonDisplay from './buttonDisplay'
import Footer from './footer'

class Sheets extends Component {
  loadSpreadsheet() {
    return this.props.getSpreadsheetData();
  }

  render() {
    return (
      <div>
        {!this.props.sheet ? (
          this.props.getSpreadsheetData()
        ) : !this.props.sheet.data ? (
          console.log(this.props.sheet.loading)
        ) : (
          <div className="App">
            <Header />
            <div className="mainAppBody">
              <div className="text-center">
                <h3>{this.props.sheet.data.data[1].text}</h3>
                <EmojiDisplay emoji={this.props.sheet.data.data[1].emoji} />
                <ButtonDisplay />
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }//End Return
}//End Sheets

function mapStateToProps(state) {
  return {
    sheet: state.sheet
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
