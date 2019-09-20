import React from 'react';
import classes from "./Spinner.module.css"
function Spinner(){
  return(
  <div className={classes.Spinner}>
    <div className={classes.loader}>Loading...</div>
  
  </div>
  )
}
export default Spinner;
