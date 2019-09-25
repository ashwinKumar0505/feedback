import React from 'react';
import { connect } from "react-redux"
import { Route , Switch } from "react-router"

import Register from "./container/RegisterPage/RegisterPage"
import Success from './component/Success/Success';
import Login from "./container/Login/Login"
import HomePage from './container/HomePage';
import './App.css';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';

function App(props) {

  return (
    <div className="App">
      <Switch >
        <PrivateRoute path="/home-page" component={HomePage} userId={props.userId}/>
       <Route path="/register" component={Register} />
       <Route path="/success" component={Success} />
       <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

const mapStateToProps=state=>{
  return {
    userId:state.authReducer.userId
  }
}

export default connect(mapStateToProps)(App);
