import React, { Component } from "react";
import fire from "../../config/firebase";
import classes from "./RegisterPage.module.css";
import Spinner from "../../component/Spinner/Spinner";
class RegisterPage extends Component {
  state = {
    fullName: "",
    email: "",
    userName: "",
    password: "",
    error:"",
    displaySpinner:false
  };
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error:""
    });
  };
  register = event => {
    event.preventDefault();
    this.setState({
      displaySpinner:true
    })
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {this.props.history.push("/success")})
      .catch(error=>{
          this.setState({
            error:error.message,
            displaySpinner:false
          })
      })
  };
  render() {
    console.log(this.props)
    return (
      <div className={classes.RegisterPage}>
        <div className={classes.RegisterWindow}>
          { this.state.displaySpinner? 
          <Spinner /> :
  
          <form onSubmit={this.register}>
            <h1 style={{ textAlign: "center" }}>SIGN UP</h1>
            <input
              type="text"
              placeholder="Your Full Name"
              name="fullName"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <input
              type="text"
              placeholder="User Name"
              name="userName"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <button>Register</button>
             {this.state.error?<p style={{color:"red"}}>{this.state.error}</p> : null}
          </form> }
        </div>
      </div>
    );
  }
}

export default RegisterPage;
