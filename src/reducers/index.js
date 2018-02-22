import { combineReducers } from 'redux';
import { roundReducer } from './roundReducer';
import { scoreReducer } from './scoreReducer';
import { levelReducer } from './levelReducer';
import { buttonsReducer } from './buttonsReducer';
import { feedbackReducer } from './feedbackReducer';
import { soundReducer } from './soundReducer';
import { explainerReducer } from './explainerReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  round: roundReducer,
  score: scoreReducer,
  level: levelReducer,
  buttons: buttonsReducer,
  feedback: feedbackReducer,
  sound: soundReducer,
  explanation: explainerReducer,
  router: routerReducer
});

export default rootReducer;
