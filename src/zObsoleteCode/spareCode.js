////Button Reducer
const buttonReducer = (level, exercise) => {
    if(exercise){
      switch(level){
        case 1:
          return ['push', 'pull'];
        case 2:
          return ['pain', 'please'];
        break;
      }
  }
    else {
      return ['next'];
    }
    return {};
}



function mapStateToProps(state) {
  //Whatever is returned will show up as props inside BookList
  //Whenever state changes it will re-render
  return {
    round: state.round
  };
}

//anything returned to this function will end up as props
//on the booklist containter
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called the result should be past to all reduceers
  return bindActionCreators({ correctResponse: correctResponse,
    incorrectResponse: incorrectResponse,
    nextRound: nextRound
   }, dispatch);
}

//Promote BookList from component to containter
//Must know about new dispatch method: selectBook and make it
//available as a prop
connect(mapStateToProps, mapDispatchToProps)(App);

nextRound("Welcome");


const store = createStoreWithMiddleware(roundReducer);

store.subscribe(()=>{
  console.log("store changed", store.getState())
});

store.dispatch({type: NEXT, payload: "Welcome"});
store.dispatch({type: CORRECT, payload: "1a"});


////////////////Original Reducer

const levelsDataReducer = (state = null, id) => {
  switch(id){
    case "Welcome":
      return {
          buttons: ['next'],
          text: 'Welcome to Move Awareness',
          video: '',
          nextId: '1a',
          exercise: false
        };
    case "1a":
      return {
        buttons: ['push', 'place'],
        text: 'Please take out the trash',
        video: 'AdNloRF6JGI',
        correctAnswer: 'place',
        FeedbackId: '1aF',
        NextId: '',
        level: 1,
        exercise: true
      };
    case "1af":
      return {
        buttons: ['next'],
        text: 'It was a place move',
        video: '',
        NextId: '',
        level: 1,
        exercise: false
      };
    }// End switch case
  return state;
}


const roundReducer = (state = initialState, action) => {
  switch(action.type){
    case NEXT:
      return levelsDataReducer(action.payload);
    case CORRECT:
      return levelsDataReducer(action.payload);
    case INCORRECT:
      return levelsDataReducer(action.payload);
    break;
  }
  return state;
}


switch(array[0]){
  case 0:
    return {options: "next"};
  case 1:
    return {options: ['push', 'pull']};//
  case 2:
    return {options: ['pain', 'please']};//
  case 3:
    return {options: ['pause', 'place']};//
  case 4:
    return {options: ['push', 'pain']};//
  case 5:
    return {options: ['pull', 'please']};//
  case 6:
    return {options: ['pause', 'pain']};//
  case 7:
    return {options: ['place', 'push']};//
  case 8:
    return {options: ['place', 'pull']};//
  case 9:
    return {options: ['place', 'pain']};
  case 10:
    return {options: ['place', 'pain', 'please']};
  case 11:
    return {options: ['place', 'please', 'push']};
  case 12:
    return {options: ['pause', 'place', 'push']};
  case 13:
    return {options: ['place', 'push', 'pain']};
  case 14:
    return {options: ['place', 'please', 'pull']};
  case 15:
    return {options: ['pause', 'push', 'pain']};
  case 16:
    return {options: ['place', 'push', 'pain', 'pause']};
  case 17:
    return {options: ['place', 'please', 'pull', 'push']};
  case 18:
    return {options: ['place', 'pause', 'pain', 'please']};
  case 19:
    return {options: ['place', 'pause', 'pain', 'push', 'pull']};
  case 20:
    return {options: ['place', 'pause', 'pain', 'please', 'pull']};
  case 21:
    return {options: ['place', 'pause', 'pain', 'please', 'push']};
  case 22:
    return {options: ['place', 'pause', 'pain', 'please', 'pull', 'push']};
  default:
    return {options: 'next'};
}

}
