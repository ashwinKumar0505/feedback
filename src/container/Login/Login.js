import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import fire from "../../config/firebase";
class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "Wait...You Are Been Redirecting To Home Page",
    pageLoading: false,
    error:""
  };
  emailChangeHandler = event => {
    this.setState({
      email: event.target.value,
      error:""
    });
  };
  passwordChangeHandler = event => {
    this.setState({
      password: event.target.value,
      error:""
    });
  };
  login = event => {
    this.setState({
      pageLoading: true,
    });
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.props.history.push("/home-page");
      })
      .catch(error => {
        this.setState({
          error: error.message,
          pageLoading:false
        });
      });
  };
  render() {
    let displayComponent = null;
    if (this.state.pageLoading) {
      displayComponent = 
      <div>  
      <h3>Wait....You are being redirecting to the Home Page</h3>
      </div>
    
    } else {
      displayComponent = 
        <div>
          <form onSubmit={this.login}>
            <h1 style={{ textAlign: "center" }}>LOGIN</h1>
            <input
              type="text"
              placeholder="Email Address"
              onChange={this.emailChangeHandler}
              required
            />
            <br></br>
            <input
              type="password"
              placeholder="password"
              required
              onChange={this.passwordChangeHandler}
            />
            <br></br>
            <button>LOGIN</button>
          </form>
          {this.state.error ? (
            <p style={{ color: "red" }}>Invalid Email or Password</p>
          ) : null}
          <br></br>
          <p>
            Not registered {"  "}
            <Link to={{ pathname: "/register" }}>
              <span>Create an account</span>
            </Link>
          </p>
        </div>
    }

    return (
      <div className={classes.LoginPage}>
        <div className={classes.Login}>
          {displayComponent}
        </div>
      </div>
    );
  }
}

export default Login;
