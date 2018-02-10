import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import promise from 'redux-promise';

import reducers from './reducers'
import App from './containers/App';
import Home from './containers/home';
import Explanation from './containers/explanation';

import './styles/index.css';
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
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/exercises" component={App} />
          <Route path="/explanation" component={Explanation} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

//store.subscribe(()=>{console.log("it changed", store.getState())})
/*ReactDOM.render(
    <App />,
  document.getElementById('root'));
registerServiceWorker();
*/
//This merely logs the store as it changes
