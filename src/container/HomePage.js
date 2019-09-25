import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ChatBox from "../component/ChatBox/ChatBox";
import ChatIcon from "../component/ChatIcon/ChatIcon";
import DisplayContent from "../component/DisplayContent/DisplayContent";
import { changeTheLoginState } from "../Store/actions/auth"

class HomePage extends Component {
  state = {
    showChatBox: false,
    changeChatSign: false,
    showInitial: true,
    showFinal: false,
    showSecond: false,
    showPrevConv: false,
  };
  chatBoxHandler = () => {
    this.setState(prev => ({
      showChatBox: !prev.showChatBox,
      changeChatSign: !prev.changeChatSign,
    }));
  };
  changeToInitial = () => {
    this.setState(prev => ({
      showInitial: true,
      showSecond: false,
      showFinal: false,
      showPrevConv: false,
    }));
  };
  changeToSecond = () => {
    this.setState({
      showInitial: false,
      showSecond: true,
      showFinal: false,
      showPrevConv: false,
    });
  };
  changeToFinal = () => {
    this.setState({
      showInitial: false,
      showSecond: false,
      showFinal: true,
      showPrevConv: false,
    });
  };
  changeToPrevConv = () => {
    this.setState({
      showInitial: false,
      showSecond: false,
      showFinal: false,
      showPrevConv: true,
    });
  };
  render() {
    return (
      this.props.userId ? 
      <div>
        <DisplayContent />
        <ChatBox
          showInitial={this.state.showInitial}
          changeToInitial={this.changeToInitial}
          showChatBox={this.state.showChatBox}
          showFinal={this.state.showFinal}
          changeToFinal={this.changeToFinal}
          showSecond={this.state.showSecond}
          changeToSecond={this.changeToSecond}
          showPrevConv={this.state.showPrevConv}
          changeToPrevConv={this.changeToPrevConv}
        />
        <ChatIcon
          changeChatSign={this.state.changeChatSign}
          openTheChat={this.chatBoxHandler}
        />
      </div> : <Redirect to="/" />
    );
  }
}

const mapStateToProps=state=>{
  return {
    userId:state.authReducer.userId
  }
}


const mapDispatchToProps=dispatch=>{
  return {
  changeTheLoginState:()=>dispatch(changeTheLoginState())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
