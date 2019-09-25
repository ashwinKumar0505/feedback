import React from "react";
import ReactDOM from "react-dom";
import { combineReducers } from "redux";
import { HashRouter } from "react-router-dom";
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "./Store/reducers/Reducer";
import authReducer from "./Store/reducers/auth";

import "./index.css";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    reducer: reducer,
    authReducer:authReducer
});

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  document.getElementById("root"),
);
