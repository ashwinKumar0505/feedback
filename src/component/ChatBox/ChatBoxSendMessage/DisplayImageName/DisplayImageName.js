import React from "react";
import classes from "./DisplayImage.module.css";
const DisplayImageName = props => {
  return (
    props.show ?
    <div>
    <div className={classes.DisplayImageName}>
      {props.images.map((image,index) => {
        return (
          <div className={classes.file} key={image[0].name}>
            <p>{image[0].name}</p>;
            <p style={{ color: "red", fontSize: "1.2em",cursor:"pointer"}} onClick={()=>props.deleteTheFile(image[0].name)}>&times;</p>
          </div>
        );
      })}
    </div>
    </div> : null
  );
};

export default DisplayImageName;
