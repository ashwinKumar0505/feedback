import React from "react";
import ChatBoxInitital from "./ChatBoxInitital/ChatBoxInitial";
import ChatBoxSendMessage from "./ChatBoxSendMessage/ChatBoxSendMessage";
import classes from "./ChatBox.module.css";
import ChatBoxFinal from "../ChatBoxFinal/ChatBoxFinal";
import PrevConv from "../PrevConv/PrevConv"
  const ChatBox = props => {
    
    let chatComponent=null;
    if(props.showInitial){
      chatComponent=<ChatBoxInitital changeToSecond={props.changeToSecond} />
    }
    else if(props.showSecond){
      chatComponent=   <ChatBoxSendMessage  changeToInitial={props.changeToInitial} changeToFinal={props.changeToFinal}/>
     
    }
    else if(props.showFinal){ 
           chatComponent=<ChatBoxFinal changeToInitial={props.changeToInitial} changeToPrevConv={props.changeToPrevConv}/>
    }
    else if(props.showPrevConv){
      chatComponent=  <PrevConv changeToFinal={props.changeToFinal}/>
    }

  return  (
    <div className={classes.ChatBox} style={{transform:props.showChatBox ? "translateY(0)":"translateY(100vw)",
            opacity:props.showChatBox? "1" : "0"}}>          
      <div className={classes.chatComponent}>  
      {chatComponent}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className={classes.help}
      >
          <title className={classes.title}>Powered by Help Scout</title>  
        <path
          fillRule="evenodd"
          d="M11.63 7.5L5.37 14c-.783-.813-1.272-1.93-1.37-3.25 0-1.219.587-2.438 1.37-3.25L11.728 1C12.511 1.812 13 3.031 13 4.25c0 1.219-.587 2.437-1.37 3.25zm2.755 9l6.33-6.5c.79.914 1.285 2.031 1.285 3.25 0 1.219-.593 2.438-1.385 3.25l-6.33 6.5c-.79-.813-1.285-2.031-1.285-3.25 0-1.219.593-2.438 1.385-3.25zm-.155-9l1.868-1.9L20.721 1C21.508 1.8 22 3 22 4.2c0 1.2-.59 2.4-1.377 3.2L16.098 12l-1.868 1.9-2.656 2.7-1.87 1.9L5.28 23C4.492 22.2 4 21 4 19.8c0-1.2.59-2.4 1.377-3.2l4.426-4.5 1.77-1.9 2.657-2.7z"
          fill= "rgb(193, 203, 212)"
        >
        </path>
      </svg>
      <div>
    </div>
    </div>
  )
};

export default ChatBox;
