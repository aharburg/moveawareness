import { CORRECT, NEXT, RESET, INCORRECT } from '../actions/actions';

function arrayBreakdown (array){
  return {CurrentLevel: array[0], CurrentRound: array[1]};
}
//This function sets the new level and new round

const initialState = {CurrentLevel: 1, CurrentRound: -1};

//Reducer function returns state of CurrentLevel and CurrentRound
export function levelReducer (state = initialState, action){
  switch(action.type){
    case NEXT:
      return arrayBreakdown(action.payload);
    case CORRECT:
      return arrayBreakdown(action.payload);
    case INCORRECT:
      return state;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
