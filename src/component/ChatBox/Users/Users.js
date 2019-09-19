import React from 'react';
import person1 from "../../../assets/person1.png"
import person2 from "../../../assets/person2.png"
import person3 from "../../../assets/person3.png"
import person4 from "../../../assets/person4.png"
import person5 from "../../../assets/person5.png"
import classes from './Users.module.css';

const Users=()=>{
  return(
    <div className={classes.Users}>
       <img src={person1} alt="person1"/>
       <img src={person2} alt="person1"/>
       <img src={person3} alt="person1"/>
       <img src={person4} alt="person1"/>
       <img src={person5} alt="person1"/>
       
    </div>
  )
}

export default Users;