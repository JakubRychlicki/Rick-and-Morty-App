import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../axios-rickyandmorty";
import classes from "./PreviewCharacter.module.css";

import Spinner from "../UI/Spinner/Spinner";

const PreviewCharacter = ({ match }) => {
  let id = match.params.id;

  const [character, setCharacterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/character/${id}`);
      setCharacterData(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {character ? (
        <div className={classes.Container}>
          <div className={classes.nameBox}>
            <h2 className={classes.nameText}>{character.name}</h2>
            <div className={classes.statusBox}>
              <svg height="24" width="24">
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="black"
                  strokeWidth="2"
                  fill={character.status === "Alive" ? "green" : "red"}
                />
              </svg>
              <span className={classes.statusText}>{character.status}</span>
            </div>
          </div>
          <div className={classes.imageWithDetails}>
            <div className={classes.imageBox}>
              <img
                className={classes.avatar}
                src={character.image}
                alt={character.name}
              />
            </div>
            <div className={classes.detailsBox}>
              <h3 className={classes.detailsTitle}>Details:</h3>
              <p>
                Gender: <span>{character.gender}</span>
              </p>
              <p>
                Species: <span>{character.species}</span>
              </p>
              <p>
                Location: <span>{character.location.name}</span>
              </p>
            </div>
          </div>
          <div className={classes.btnLeaveBox}>
            <Link className={classes.btnLeave} to="/">
              <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PreviewCharacter;
