import React from 'react';
import { connect } from "react-redux";
import { Route , Redirect } from "react-router-dom";

const PrivateRoute=({ component:Component , userId, ...rest  })=>{
return (
    <Route {...rest} render={()=>userId ? <Component /> : <Redirect to="/" />} />
)
}

const mapStateToProps=state=>{
  return {
    userId:state.authReducer.userId
  }
}

export default connect(mapStateToProps)(PrivateRoute);