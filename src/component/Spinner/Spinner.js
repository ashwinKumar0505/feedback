import React from 'react';
import classes from "./Spinner.module.css"
function Spinner(){
  return(
  <div style={{margin:"300px auto" ,width:"500px"}}>
    <div className={classes.loader}>Loading...</div>
  
  </div>
  )
}
export default Spinner;
