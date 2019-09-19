import React,{useEffect,useState} from 'react'
import {Redirect } from "react-router-dom"
import classes from './Success.module.css'
const Success=()=>{
  const [redirectInitial,setRedirect]=useState(false)
  let redirectComponent=null
  useEffect(()=>{
    setTimeout(()=>{
          setRedirect(true)      
    },3000)
  },[])
  
  if(redirectInitial){
    redirectComponent=<Redirect push to="/" />;
  }
  else{
 redirectComponent=null
  }
  return(
    <div className={classes.SuccessPage}>
      <div className={classes.Success}>
        <h1>You have been registered successfully</h1>
        <h3>Wait......You are redirecting to the login page</h3>
        {redirectComponent}
      </div>
    </div>
  )
}
export default Success