import React from "react";

import classes from "./Character.module.css";

const Character = (props) => {
  const { image } = props.character;

  return (
    <div className={classes.Container}>
      <div className={classes.ImageBox}>
        <img className={classes.Image} src={image} />
      </div>
    </div>
  );
};

export default Character;
