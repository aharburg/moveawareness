import React from "react";
import ReactDOM from "react-dom";

import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
//import promise from 'redux-promise';
import { Router } from "react-router";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./containers/App";
import Home from "./containers/home";
import Explanation from "./containers/explanation";
import Sheets from "./containers/Spreadsheet";

import createHistory from "history/createBrowserHistory";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

//This reducer is responsible for sending the correct media to the starte
//It also is responsible for tracking the score
const updateLevel = store => next => action => {
  console.log(action.payload);
  console.log(store.getState());

  next(action);
}; //updateLevel middleware

const history = createHistory(); //Imported function

const middleware = routerMiddleware(history); //An imported function

const store = createStore(
  reducers,
  applyMiddleware(middleware, updateLevel, thunk)
);

////////////////////////middleware

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/exercises" component={App} />
        <Route path="/explanation" component={Explanation} />
        <Route path="/sheets" component={Sheets} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
