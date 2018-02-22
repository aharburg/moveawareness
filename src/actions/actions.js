export const CORRECT = 'CORRECT';
export const NEXT = 'NEXT';
export const INCORRECT = 'INCORRECT';
export const RESET = 'RESET';
export const CLICK = 'CLICK';
export const EXPLANATION = 'EXPLANATION';
export const DEFAULT = 'DEFAULT';
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
