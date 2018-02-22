import { CORRECT, RESET } from '../actions/actions';

export function scoreReducer (state = 0, action){
  switch(action.type){
    case CORRECT:
      return state + action.score;
    case RESET:
      return state * 0;
    default:
      return state;
  }
}
