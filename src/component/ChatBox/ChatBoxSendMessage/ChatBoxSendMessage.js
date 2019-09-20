import React, { useState,useEffect } from "react";
import Users from "../Users/Users";
import classes from "./ChatBoxSendMessage.module.css";
import { connect } from "react-redux";
import DisplayImageName from "./DisplayImageName/DisplayImageName";
import {
  storeTheFeedBack,
  nameChangeHandler,
  subjectChangeHandler,
  emailChangeHandler,
  helpChangeHandler,
} from "../../../Store/ActionCreators";
import BackDrop from "../../BackDrop/BackDrop";

const ChatBoxSendMessage = props => {
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  const [showFiles, setshowFiles] = useState(false);
  const imageHandler = event => {
    if (event.target.files.length!==0) {
      setImages([...images, event.target.files]);
      setImageCount(imageCount + 1);
    }
  };
  const filesOpenHandler = () => {
    setshowFiles(true);
  };
  const filesCloseHandler = () => {
    setshowFiles(false);
  };
  const deleteTheFile=(file)=>{
        setImages(images.filter(image=>image[0].name!==file))
        setImageCount(imageCount - 1);
  }
  useEffect(() => {
      if(images.length===0){
          setshowFiles(false);
      } 
  }, [images])
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
            style={{ fontSize: "18px", color: "white", cursor: "pointer" }}
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
        <form
          onSubmit={event => {
            props.storeTheFeedBack(event, props.feedBack);
            props.changeToFinal();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={classes.name}
            onChange={props.nameChangeHandler}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className={classes.subject}
            onChange={props.subjectChangeHandler}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className={classes.email}
            onChange={props.emailChangeHandler}
            required
          />
          <div
            className={classes.TextArea}
            name="help"
            onChange={props.helpChangeHandler}
          >
            <textarea placeholder="How can we help" required></textarea>
            <div className={classes.imageSelector}>
              {imageCount === 0 ? (
                <span></span>
              ) : (
                <span className={classes.imageCount} onClick={filesOpenHandler}>
                  {imageCount} files
                </span>
              )}
              <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
              ></link>
              <input
                type="file"
                id="image_uploads"
                name="image_uploads"
                className={classes.fileUpload}
                onChange={imageHandler}
              />
              <label for="image_uploads">
                <i className="material-icons" style={{ fontSize: "30" }}>
                  add_a_photo
                </i>
              </label>
            </div>
          </div>
          <br></br>
          <button className={classes.SendButton}>Send a message</button>
        </form>
      </div>
      <BackDrop show={showFiles} close={filesCloseHandler} />
      <DisplayImageName images={images} show={showFiles} deleteTheFile={deleteTheFile}/>
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
