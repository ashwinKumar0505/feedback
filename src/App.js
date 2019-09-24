import React,{useEffect} from 'react';
import './App.css';
import HomePage from './container/HomePage';
import Login from "./container/Login/Login"
import Register from "./container/RegisterPage/RegisterPage"
import {Route,Switch} from "react-router"
import Success from './component/Success/Success';
import {connect} from "react-redux"
import { authCheckState } from './Store/actions/auth'
import {withRouter} from "react-router-dom"
function App(props) {

  useEffect(()=>{
    console.log("here to use effect")
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
