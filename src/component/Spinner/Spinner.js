import React from 'react';
import classes from "./Spinner.module.css"
function Spinner(){
  return(
  <div style={{MarginTop:"100px"}}>
    <div className={classes.loader}>Loading...</div>
  
  </div>
  )
}
export default Spinner;
