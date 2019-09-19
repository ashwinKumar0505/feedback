import React from "react";
import Users from "../Users/Users";
import classes from "./ChatBoxSendMessage.module.css";
import { connect } from "react-redux";

import {
  storeTheFeedBack,
  nameChangeHandler,
  subjectChangeHandler,
  emailChangeHandler,
  helpChangeHandler,
} from "../../../Store/ActionCreators";

const ChatBoxSendMessage = props => {
  console.log("here to second")
  return (
    <div>
      <div className={classes.UpperChatBox}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className={classes.firstPara}>
          <i
            className="fa fa-long-arrow-left"
            style={{ fontSize: "20px", color: "white", cursor: "pointer" }}
            onClick={props.changeToInitial}
          ></i>
          <p
            style={{ fontWeight: "400", color: "white", marginBottom: "20px" }}
          >
            Send a message
          </p>
        </div>
        <Users />
        <p
          style={{
            fontWeight: "500",
            color: "white",
            margin: 0,
            marginTop: "10px",
          }}
        >
          How can we help?
        </p>
        <p style={{ fontWeight: "300", color: "white", margin: 0 }}>
          We usually respond in a few hours
        </p>
      </div>
      <div className={classes.Form}>
        <form  onSubmit={event => {props.storeTheFeedBack(event, props.feedBack); props.changeToFinal();}}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={props.nameChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            onChange={props.subjectChangeHandler}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            onChange={props.emailChangeHandler}
            required
          />
          <div
            className={classes.TextArea}
            name="help"
            onChange={props.helpChangeHandler}
          >
            <textarea placeholder="How can we help" required></textarea>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            ></link>
              <i
                className="material-icons"
                style={{ fontSize: "30", color: "#cdd5dd" }}
              >
                add_a_photo
              </i>
          </div>
          <br></br>
          <button
            className={classes.SendButton}
          >
            Send a message
          </button>
        </form>
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    feedBack: state.feedBack,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    nameChangeHandler: event => dispatch(nameChangeHandler(event)),
    subjectChangeHandler: event => dispatch(subjectChangeHandler(event)),
    emailChangeHandler: event => dispatch(emailChangeHandler(event)),
    helpChangeHandler: event => dispatch(helpChangeHandler(event)),
    storeTheFeedBack: (event, feedBack) =>
      dispatch(storeTheFeedBack(event, feedBack)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatBoxSendMessage);
