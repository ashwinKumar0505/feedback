import React, { useState, useEffect } from "react";
import Users from "../Users/Users";
import { connect } from "react-redux";

import DisplayImageName from "./DisplayImageName/DisplayImageName";
import {
  storeTheFeedBack
} from "../../../Store/actions/ActionCreators";
import BackDrop from "../../BackDrop/BackDrop";

import classes from "./ChatBoxSendMessage.module.css";

const ChatBoxSendMessage = props => {
  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  const [showFiles, setshowFiles] = useState(false);
  const [feedBack, changeFeedBack] = useState({
    name: "",
    subject: "",
    email: "",
    help: "",
  });

  const feedBackHandler=(name,value)=>{
    changeFeedBack({...feedBack , [ name ]:value})
  }

  const imageHandler = event => {
    if (event.target.files.length !== 0) {
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
  const deleteTheFile = file => {
    setImages(images.filter(image => image[0].name !== file));
    setImageCount(imageCount - 1);
  };
  useEffect(() => {
    if (images.length === 0) {
      setshowFiles(false);
    }
  }, [images]);
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
          className={classes.ShouldHide}
        >
          How can we help?
        </p>
        <p
          style={{ fontWeight: "300", color: "white", margin: 0 }}
          className={classes.ShouldHide}
        >
          We usually respond in a few hours
        </p>
      </div>
      <div className={classes.Form}>
        <form
          onSubmit={event => {
            props.storeTheFeedBack(
              event,
              feedBack,
              props.token,
              props.userId,
            );
            props.changeToFinal();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={classes.name}
            onChange={(event)=>feedBackHandler(event.target.name,event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className={classes.subject}
            onChange={(event)=>feedBackHandler(event.target.name,event.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className={classes.email}
            onChange={(event)=>feedBackHandler(event.target.name,event.target.value)}
            required
          />
          <div
            className={classes.TextArea}
            name="help"
            onChange={(event)=>feedBackHandler("help",event.target.value)}
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
      <DisplayImageName
        images={images}
        show={showFiles}
        deleteTheFile={deleteTheFile}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    userId: state.authReducer.userId,
  };
};
const mapDispatchToProps = dispatch => {
  return {
      storeTheFeedBack: (event, feedBack, token, userId) =>
      dispatch(storeTheFeedBack(event, feedBack, token, userId)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatBoxSendMessage);
