import React from "react";
import classes from "./PrevConv.module.css";
import { connect } from "react-redux";
const PrevConv = props => {
  return (
    <div>
      <div className={classes.UpperChatBox}>
        <div className={classes.firstPara}>
            <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
          <i
            className="fa fa-long-arrow-left"
            style={{ fontSize: "20px", color: "white", cursor: "pointer" }}
            onClick={props.changeToFinal}
          ></i>
          <p
            style={{ fontWeight: "400", color: "white" }}
          >
            Send a message
          </p>
        </div>
      </div>
      <div className={classes.dataComponents}>
      {props.data.map(data => {
        return (
          <div className={classes.data}>
            <p style={{color:"#0076cd"}}>{data.help}</p>
            <p>
              <span style={{ color: "#57c37c" }}>&#10004; &nbsp;</span>Recieved. Waiting
              for an answer
            </p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.reducer.data,
  };
};
export default connect(mapStateToProps)(PrevConv);
