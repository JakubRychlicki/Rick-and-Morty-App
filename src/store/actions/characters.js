import * as actionTypes from "./actionTypes";
import axios from "../../axios-rickyandmorty";

export const charactersFetchSuccess = (characters) => {
  return {
    type: actionTypes.CHARACTERS_FETCH_SUCCESS,
    characters,
  };
};

export const charactersFetchFail = (error) => {
  return {
    type: actionTypes.CHARACTERS_FETCH_FAIL,
    error,
  };
};

export const charactersFetchStart = () => {
  return {
    type: actionTypes.CHARACTERS_FETCH_START,
  };
};

export const fetchCharacters = () => {
  return (dispatch) => {
    dispatch(charactersFetchStart());
    axios
      .get("/character")
      .then((response) => {
        dispatch(charactersFetchSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(charactersFetchFail(error));
      });
  };
};
