import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import {
  fetchingTheDetails,
  gettingTheFeedBacks,
} from "../../Store/ActionCreators";
import classes from "./DisplayContent.module.css";
import Spinner from "../Spinner/Spinner";
class DisplayContent extends Component {
  componentDidMount() {
    this.props.gettingTheDetails();
  }
  render() {
    return this.props.isLoaded ? (
      <div className={classes.DisplayContent}>
          <Link to="/Login">
          <button className={classes.LogOut}>LOG OUT</button>
        </Link>
        <h1 style={{color:"white",boxShadow:"white 0px 0px 1px 11px",width:"30%",margin:"10px auto",padding:"15px 20px" }}>FEED BACK</h1>
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
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}
const mapStateToProps = state => {
  return {
    feedBack: state.feedBack,
    data: state.data,
    isLoaded: state.isLoaded,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingTheDetails: () => dispatch(fetchingTheDetails()),
    gettingTheFeedBacks: () => dispatch(gettingTheFeedBacks()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DisplayContent);
