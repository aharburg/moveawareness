import { CORRECT, INCORRECT, CLICK } from '../actions/actions';

const initialState = {volume: false, soundType:'begin', };

function toggleVolume (payload) {
  return (payload ? false : true)
}

export function soundReducer (state = initialState, action){
  switch(action.type){
    case CORRECT:
      return {...state, soundType: 'ding'}
    case INCORRECT:
      return {...state, soundType: 'buzz'}
    case CLICK:
      return {volume: toggleVolume(action.payload), soundType: '',}
    default:
      return state;
  }
}
