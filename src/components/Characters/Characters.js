import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Character from "./Character/Character";
import classes from "./Characters.module.css";

const Characters = (props) => {
  const { characters, onFetchCharacters } = props;

  useEffect(() => {
    onFetchCharacters();
  }, [onFetchCharacters]);
  return (
    <div className={classes.Container}>
      <div className={classes.CharactersBox}>
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { characters: state.characters.characters };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCharacters: () => dispatch(actions.fetchCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
