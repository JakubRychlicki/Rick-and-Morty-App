import React from "react";

import classes from "./Character.module.css";

const Character = (props) => {
  const { image, name } = props.character;

  return (
    <div className={classes.Container}>
      <div className={classes.ImageBox}>
        <img className={classes.Image} src={image} alt={name} />
      </div>
      <h3 className={classes.nameCharacter}>{name}</h3>
    </div>
  );
};

export default Character;
