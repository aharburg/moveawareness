import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';

import reducers from './reducers'
import App from './containers/App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//This reducer is responsible for sending the correct media to the starte
//It also is responsible for tracking the score
const updateLevel = (store) => (next) => (action) => {
  console.log(action.payload);
  console.log(store.getState())
next(action);
}//updateLevel middleware

const createStoreWithMiddleware = applyMiddleware(updateLevel)(createStore);
////////////////////////middleware

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));


//store.subscribe(()=>{console.log("it changed", store.getState())})
/*ReactDOM.render(
    <App />,
  document.getElementById('root'));
registerServiceWorker();
*/
//This merely logs the store as it changes
