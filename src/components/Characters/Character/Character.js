import React from "react";

import classes from "./Character.module.css";

const Character = (props) => {
  const { image, name } = props.character;

  return (
    <div className={classes.Container}>
      <div className={classes.ImageBox}>
        <img className={classes.Image} src={image} alt={name} />
      </div>
    </div>
  );
};

export default Character;
