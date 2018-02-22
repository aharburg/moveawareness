import { CORRECT, NEXT, RESET, INCORRECT, CLICK } from '../actions/actions';
import ExerciseData from './exerciseData';
//import FeedbackData from './feedbackData';

const initialState = {
  text: 'Welcome to Move Awareness! \n These exercises should help you'
  + ' learn the moves.',
  video: '',
  feedbackId: '',
  emoji: 24,
};

export function roundReducer (state = initialState, action){
  switch(action.type){
    case NEXT:
      return ExerciseData[action.payload[0]][action.payload[1]];
    case CORRECT:
      return ExerciseData[action.payload[0]][action.payload[1]];
    case RESET:
      return initialState;
    case INCORRECT:
      return ExerciseData[action.payload[0]][action.payload[1]];
    case CLICK:
      return state;
    default:
      return state;
  }

}
