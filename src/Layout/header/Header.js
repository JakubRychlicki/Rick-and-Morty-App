import React from "react";
import RickAndMortyText from "../../assets/images/header.png";
import classes from "./Header.module.css";

const Header = () => (
  <div className={classes.Container}>
    <img
      className={classes.imageText}
      src={RickAndMortyText}
      alt="title rickandmorty"
    />
  </div>
);

export default Header;
