// actions/spreadsheet.js
// --- Action-creators ---
function requestSpreadsheet() {
  return {
    type: 'SPREADSHEET_REQUEST'
  }
}


function receiveSpreadsheet(data) {
  return {
    type: 'SPREADSHEET_RECEIVED',
    payload: {
      data: data
    }
  }
}


function receiveSpreadsheetError(error) {
  return {
    type: 'SPREADSHEET_FAIL',
    payload: {
      error: error
    }
  }
}

// --- API ---
function fetchTable(tableInfo) {
  // Code related to API here. Should just return a promise.
  // Someting like...
  return fetch('spreadsheet url here')
}


// --- Thunks ---
function getSpreadsheetData(tableInfo) {
  return function (dispatch, getState) {
    // Tell reducers that you are about to make a request.
    dispatch(requestSpreadsheet())

    // Make the request, then tell reducers about
    // whether it succeeded or not.
    return fetchTable(tableInfo).then(
      data => dispatch(receiveSpreadsheet(data)),
      error => dispatch(receiveSpreadsheetError(error))
    )
  }
}
