import React, { Component } from "react";
import fire from "../../config/firebase";
import Spinner from "../../component/Spinner/Spinner";
import classes from "./RegisterPage.module.css";
class RegisterPage extends Component {
  state = {
    fullName: "",
    email: "",
    userName: "",
    password: "",
    error: "",
    displaySpinner: false,
  };
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: "",
    });
  };
  register = event => {
    event.preventDefault();
    let passw = /^[A-Za-z]\w{7,14}$/;
    if (this.state.password.match(passw)) {
    
    this.setState({
      displaySpinner: true,
    });
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.props.history.push("/success");
      })
      .catch(error => {
        this.setState({
          error: error.message,
          displaySpinner: false,
        });
      });
    }
    else{
      this.setState({
        error:"Please enter 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter"
      })
    }
  };
  render() {
    return (
      <div className={classes.RegisterPage}>
        <div className={classes.RegisterWindow}>
          {this.state.displaySpinner ? (
            <Spinner />
          ) : (
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
              {this.state.error ? (
                <p style={{ color: "red" }}>{this.state.error}</p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default RegisterPage;
