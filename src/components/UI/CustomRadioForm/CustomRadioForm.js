import React from "react";
import classes from "./CustomRadioForm.module.css";

const CustomRadioForm = (props) => {
  const { type, value, onHandleChange } = props;

  return (
    <div className={classes.Container}>
      <h2 className={classes.title}>{type.name}</h2>
      <div className={classes.boxOptions}>
        {type.options.map((option) => (
          <label key={option.label} className={classes.label}>
            <input
              className={classes.radio}
              name={type.name}
              type="radio"
              value={option.value}
              checked={option.value === value}
              onChange={(e) => onHandleChange(e)}
            />
            <span className={classes.textLabel}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioForm;
