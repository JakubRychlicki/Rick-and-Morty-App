import React from "react";
import { CSSTransition } from "react-transition-group";

import classes from "./SearchModal.module.css";
import SearchFilter from "../SearchFilter/SearchFilter";

const SearchModal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: classes.ModalOpen,
        exitActive: classes.ModalClosed,
      }}
    >
      <div className={classes.Container}>
        <SearchFilter {...props} />
      </div>
    </CSSTransition>
  );
};

export default SearchModal;
