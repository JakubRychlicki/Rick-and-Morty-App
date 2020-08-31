import * as actionTypes from "../actions/actionTypes";

const initialState = {
  characters: [],
  loading: false,
  error: null,
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHARACTERS_FETCH_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        loading: false,
      };
    case actionTypes.CHARACTERS_FETCH_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.CHARACTERS_FETCH_FAIL: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default characters;
