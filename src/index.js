import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux"
import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./Store/reducers/Reducer"
import authReducer from "./Store/reducers/auth"
import thunk from "redux-thunk"
import { combineReducers } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    reducer: reducer,
    authReducer:authReducer
});

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
