import React, { Component } from "react";
import { connect } from "react-redux";
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
        <h1 style={{color:"white",boxShadow:"white 0px 0px 1px 11px",padding:"20px 25px"}}>FEED BACK</h1>
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
