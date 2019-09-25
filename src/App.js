import React,{useEffect} from 'react';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {Route,Switch} from "react-router"

import Register from "./container/RegisterPage/RegisterPage"
import Success from './component/Success/Success';
import Login from "./container/Login/Login"
import { authCheckState } from './Store/actions/auth'
import HomePage from './container/HomePage';

import './App.css';
function App(props) {

  useEffect(()=>{
    props.authCheckState();
   },[props])

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

const mapDispatchToProps=dispatch=>{
   return {
     authCheckState :()=>dispatch(authCheckState())
   }
}

export default withRouter(connect(null,mapDispatchToProps)(App));
