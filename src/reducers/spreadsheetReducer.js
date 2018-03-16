// reducers/spreadsheet.js
const initialState = {
  spreadsheetData: {},
  loading: false,
  errorMsg: ""
};

export function spreadsheetReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SPREADSHEET_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "SPREADSHEET_RECEIVED":
      return {
        ...state,
        loading: false,
        spreadsheetData: action.payload.data.data,
        errorMsg: ""
      };

    case "SPREADSHEET_FAIL":
      return {
        loading: false,
        errorMsg: action.payload.error
      };
    default:
      return state;
  }
}
