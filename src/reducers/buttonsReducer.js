import { CORRECT, NEXT, RESET, INCORRECT } from '../actions/actions';

export const buttonsArray = [
  {options: 'next'},
  {options: ['push', 'pull']},//1
  {options: ['pain', 'please']},//2
  {options: ['pause', 'place']},//3
  {options: ['push', 'pain']},//4
  {options: ['pull', 'please']},//5
  {options: ['pause', 'pain']},//6
  {options: ['push', 'place']},//7
  {options: ['place', 'pull']},//8
  {options: ['place', 'pain']},//9
  {options: ['place', 'pain', 'please']},//10
  {options: ['place', 'please', 'push']},//11
  {options: ['pause', 'place', 'push']},//12
  {options: ['place', 'push', 'pain']},//13
  {options: ['place', 'please', 'pull']},//14
  {options: ['pause', 'push', 'pain']},//15
  {options: ['place', 'push', 'pain', 'pause']},//16
  {options: ['place', 'please', 'pull', 'push']},//17
  {options: ['place', 'pause', 'pain', 'please']},//18
  {options: ['place', 'pause', 'pain', 'push', 'pull']},//19
  {options: ['place', 'pause', 'pain', 'please', 'pull']},//20
  {options: ['place', 'pause', 'pain', 'please', 'push']},//21
  {options: ['please', 'pain', 'push', 'pull', 'place', 'pause']}//22
]

function arrayBreakdown(array){
  return (array[1] === 0 ? buttonsArray[0] : buttonsArray[array[0]]);
}

//This function sets the new level and new round
const initialState = {options: "next"}

//Reducer function returns state of CurrentLevel and CurrentRound
export function buttonsReducer (state = initialState, action){
  switch(action.type){
    case NEXT:
      return arrayBreakdown(action.payload);
    case CORRECT:
      return arrayBreakdown(action.payload);
    case INCORRECT:
      return initialState;
    case RESET:
      return {options: 'next'};
    default:
      return state;
  }
}
