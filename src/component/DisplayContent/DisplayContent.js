import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchingTheDetails,
  gettingTheFeedBacks,
  clearTheData
} from "../../Store/actions/ActionCreators";
import cloud from "../../assets/cloud2.png"
import {logOut } from "../../Store/actions/auth"
import classes from "./DisplayContent.module.css";
import Spinner from "../Spinner/Spinner";
class DisplayContent extends Component {
  componentDidMount() {
    this.props.gettingTheDetails(this.props.token,this.props.userId);
  }
  componentWillUnmount(){
    console.log("component unmounted")
  }
  render() {
    return this.props.isLoaded ? (
      <div className={classes.DisplayContent}>
        <Link to="/" onClick={()=>{this.props.logOut() ; this.props.clearTheData();} }>
          <button className={classes.LogOut}>LOG OUT</button>
        </Link>
        <h1
          style={{
            color: "white",
            boxShadow: "white 4px 5px 29px -4px",
            width: "30%",
            margin: "10px auto",
            padding: "15px 20px",
          }}
        >
          FEED BACK
        </h1>
      {this.props.data.length!==0 ? 
        <div className={classes.TableDiv}>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Email</th>
                <th>FeedBack</th>
              </tr>
              {this.props.data.map(data => {
                return (
                  <tr key={data.email} className={classes.Data}>
                    <td>{data.name}</td>
                    <td>{data.subject}</td>
                    <td>{data.email}</td>
                    <td>{data.help}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>: <div className={classes.noItems}>
        <img src={cloud} alt="no items" height="100px" width="100px" />
        <h1>No FeedBacks</h1>
        <p>Click on the chat Icon to give Feed backs</p>
      </div>}
      </div> 
    ) : (
      <Spinner />
    );
  }
}
const mapStateToProps = state => {
  return {
    feedBack: state.reducer.feedBack,
    data: state.reducer.data,
    isLoaded: state.reducer.isLoaded,
    token:state.authReducer.token,
    userId:state.authReducer.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingTheDetails: (token,userId) => dispatch(fetchingTheDetails(token,userId)),
    gettingTheFeedBacks: () => dispatch(gettingTheFeedBacks()),
    logOut:()=>dispatch(logOut()),
    clearTheData:()=>dispatch(clearTheData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayContent);
