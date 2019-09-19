import React from "react";

const DisplayImageName = (props) => {
  return (
    <div>
      {props.images.map(image => {
        return <p>{image[0].name}</p>;
      })}
    </div>
  );
};

export default DisplayImageName;
