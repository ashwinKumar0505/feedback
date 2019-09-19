import React from "react";
import Users from "../../component/ChatBox/Users/Users";
import classes from "./ChatBoxFinal.module.css";
const ChatBoxFinal = props => {
  console.log(props);
  return (
    <div className={classes.ChatBoxInitial}>
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
          <p style={{ fontWeight: "400", color: "white" }}>Send a message</p>
        </div>
        <Users />
        <p
          style={{
            fontWeight: "500",
            color: "white",
            fontSize: "1.2em",
            marginBottom: 0,
          }}
        >
          Start a conversation
        </p>
        <p style={{ fontWeight: "300", color: "white", margin: 0 }}>
          We usually respond in a few hours
        </p>
      </div>
      <div className={classes.bottomOfFirstPara}></div>
      <div className={classes.Reply}>
        <h3>We're on it!</h3>
        <p>
          {" "}
          You’ll receive an email reply within a few hours. You can view and
          update your message in
          <span className={classes.prevConv} onClick={props.changeToPrevConv}>
            {" "}
            Previous Conversations.
          </span>
        </p>
      </div>
    </div>
  );
};
export default ChatBoxFinal;
