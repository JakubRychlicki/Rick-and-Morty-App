import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Character from "./Character/Character";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./Characters.module.css";

const Characters = (props) => {
  const { characters, onFetchCharacters } = props;

  useEffect(() => {
    onFetchCharacters();
  }, [onFetchCharacters]);
  return (
    <div className={classes.Container}>
      {props.loading ? (
        <Spinner />
      ) : (
        <div className={classes.CharactersBox}>
          {characters.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <Character character={character} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    loading: state.characters.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCharacters: () => dispatch(actions.fetchCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
