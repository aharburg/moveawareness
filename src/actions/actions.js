export const CORRECT = 'CORRECT';
export const NEXT = 'NEXT';
export const INCORRECT = 'INCORRECT';
export const RESET = 'RESET';
export const CLICK = 'CLICK';
export const EXPLANATION = 'EXPLANATION';
export const DEFAULT = 'DEFAULT';
export const SPREADSHEET_REQUEST = 'SPREADSHEET_REQUEST'
export const SPREADSHEET_RECEIVED = 'SPREADSHEET_RECEIVED'
export const SPREADSHEET_FAILED = 'SPREADSHEET_FAILED'

//Action Types
//////////////////////////////////////////////////Action creators
export function correctResponse(id){
  return {
    type: CORRECT,
    payload: id,
    score: 1,
  }
}

export function nextRound(id){
  return {
    type: NEXT,
    payload: id,
  }
}

export function reset(){
  return {
    type: RESET,
    score: 0
  }
}

export function incorrectResponse(id, selected, correct){
  return {
    type: INCORRECT,
    payload: id,
    selected: selected,
    correct: correct
  }
}
/////////////////////////////////////

export function muteButton(currentState){
  return {
    type: CLICK,
    payload: currentState
  }
}

export function explainData(move){
  return {
    type: EXPLANATION,
    payload: move,
    pathname: '/explanation'
  }
}

export function explainDefault(){
  return{
    type: DEFAULT
  }
}

///////////////////////////////Spreadsheets

export function requestSpreadsheet() {
  return {
    type: SPREADSHEET_REQUEST
  }
}

export function receiveSpreadsheet(data) {
  return {
    type: SPREADSHEET_RECEIVED,
    payload: {
      data: data
    }
  }
}

export function receiveSpreadsheetError(error) {
  return {
    type: SPREADSHEET_FAILED,
    payload: {
      error: error
    }
  }
}
