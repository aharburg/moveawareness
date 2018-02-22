import { CORRECT, NEXT, RESET, INCORRECT, CLICK } from '../actions/actions';
//import FeedbackData from './feedbackData';

export function feedbackReducer (state = null, action){
  switch(action.type){
    case NEXT:
      return null;
    case CORRECT:
      return null;
    case RESET:
      return null;
    case INCORRECT:
      return {selected: action.selected, correct: action.correct};
    case CLICK:
      return state;
    default:
      return state;
  }
}
