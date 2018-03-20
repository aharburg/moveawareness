var Papa = require("papaparse/papaparse.js")

export function spreadsheetReducer(state = null, action = {}) {
  switch (action.type) {
    case "SPREADSHEET_REQUEST":
      return {
        //...state,
        loading: true,
        data: null
      };

    case "SPREADSHEET_RECEIVED":
      return {
        //...state,
        loading: false,
        data: Papa.parse(action.payload.data, {header: true}),
        //errorMsg: ""
      };

    case "SPREADSHEET_FAIL":
      return {
        loading: false,
        errorMsg: action.payload.error,
        data: null
      };
    default:
      return state;
  }
}
