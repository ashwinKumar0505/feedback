import React from "react";
import classes from "./ChatIcon.module.css";
const ChatIcon = props => {
  return (
    <div className={classes.Icon} onClick={props.openTheChat}>
      {props.changeChatSign ? (
        <div className={classes.ChatClose}>&times;</div>
      ) : (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"> className={classes.ChatIcon}
          <path
            d="M20.347 20.871l-.003-.05c0 .017.001.034.003.05zm-.243-4.278a2 2 0 0 1 .513-1.455c1.11-1.226 1.383-2.212 1.383-4.74C22 5.782 18.046 2 13.125 2h-2.25C5.954 2 2 5.78 2 10.399c0 4.675 4.01 8.626 8.875 8.626h2.25c.834 0 1.606-.207 3.212-.798a2 2 0 0 1 1.575.083l2.355 1.161-.163-2.878zM10.875 0h2.25C19.13 0 24 4.656 24 10.399c0 2.6-.25 4.257-1.9 6.08l.243 4.279c.072.845-.807 1.471-1.633 1.162l-3.682-1.816c-1.212.446-2.527.921-3.903.921h-2.25C4.869 21.025 0 16.142 0 10.4 0 4.656 4.869 0 10.875 0z"
            fill="#FFF"
          ></path>
        </svg>
      )}
    </div>
  );
};
export default ChatIcon;
