import React, { useState } from "react";
import classes from "./SearchFilter.module.css";
import CustomRadioForm from "../UI/CustomRadioForm/CustomRadioForm";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const optionsForm = {
  gender: {
    name: "gender",
    options: [
      { value: "female", label: "Female" },
      { value: "male", label: "Male" },
    ],
  },
  species: {
    name: "species",
    options: [
      { value: "human", label: "Human" },
      { value: "alien", label: "Alien" },
    ],
  },
  status: {
    name: "status",
    options: [
      { value: "alive", label: "Alive" },
      { value: "dead", label: "Dead" },
    ],
  },
};

const SearchFilter = (props) => {
  const [options, setOptions] = useState({
    name: "",
    gender: "",
    species: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const submitSearch = () => {
    const { name, gender, species, status } = options;
    props.onFilterCharacters(name, gender, species, status);
  };

  const resetSearch = () => {
    setOptions({
      name: "",
      gender: "",
      species: "",
      status: "",
    });
  };

  return (
    <div className={classes.Container}>
      <form className={classes.FormContainer}>
        <div className={classes.labelBox}>
          <label className={classes.labelText}>Find a character</label>
          <input
            className={classes.input}
            name="name"
            type="text"
            value={options.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <CustomRadioForm
          type={optionsForm.gender}
          value={options.gender}
          onHandleChange={handleChange}
        />
        <CustomRadioForm
          type={optionsForm.species}
          value={options.species}
          onHandleChange={handleChange}
        />
        <CustomRadioForm
          type={optionsForm.status}
          value={options.status}
          onHandleChange={handleChange}
        />
      </form>
      <div className={classes.buttonsBox}>
        <button
          onClick={submitSearch}
          className={`${classes.btn} ${classes.Search}`}
          type="submit"
        >
          Search
        </button>
        <button
          className={`${classes.btn} ${classes.Reset}`}
          type="reset"
          onClick={resetSearch}
        >
          Reset
        </button>
      </div>
      <button className={classes.btnClose} onClick={props.close}>
        <i className="far fa-times-circle"></i>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterCharacters: (name, gender, species, status) =>
      dispatch(actions.filterCharacters(name, gender, species, status)),
  };
};

export default connect(null, mapDispatchToProps)(SearchFilter);
