import React from 'react';
import './App.css';
import HomePage from './container/HomePage';
import Login from "./container/Login/Login"
import Register from "./container/RegisterPage/RegisterPage"
import {Route,Switch} from "react-router-dom"
import Success from './component/Success/Success';
function App() {
  return (
    <div className="App">
      <Switch >
       <Route path="/home-page" component={HomePage} />
       <Route path="/register" component={Register} />
       <Route path="/success" component={Success} />
       <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
