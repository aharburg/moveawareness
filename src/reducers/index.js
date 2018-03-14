import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { roundReducer } from './roundReducer';
import { scoreReducer } from './scoreReducer';
import { levelReducer } from './levelReducer';
import { buttonsReducer } from './buttonsReducer';
import { feedbackReducer } from './feedbackReducer';
import { soundReducer } from './soundReducer';
import { explainerReducer } from './explainerReducer';
import { spreadsheetReducer } from './spreadsheetReducer'

const rootReducer = combineReducers({
  round: roundReducer,
  score: scoreReducer,
  level: levelReducer,
  buttons: buttonsReducer,
  feedback: feedbackReducer,
  sound: soundReducer,
  explanation: explainerReducer,
  router: routerReducer,
  sheet: spreadsheetReducer
});

export default rootReducer;
