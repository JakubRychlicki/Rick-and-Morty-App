import React, { useState, useEffect } from "react";

import classes from "./Main.module.css";
import SearchModal from "../../components/SearchModal/SearchModal";
import Characters from "../../components/Characters/Characters";

const Main = () => {
  const [show, setShowOn] = useState(false);

  const openModal = () => {
    setShowOn(true);
  };

  const closeModal = () => {
    setShowOn(false);
  };

  useEffect(() => {
    if (window.innerWidth >= 500) {
      openModal();
    }
  }, []);

  return (
    <div className={classes.Container}>
      <SearchModal show={show} close={closeModal} />
      {show ? (
        ""
      ) : (
        <button className={classes.btnOpen} onClick={openModal}>
          <i className="fas fa-search"></i>
          <span className={classes.btnText}>Find a character</span>
        </button>
      )}
      <Characters openFilter={openModal} />
    </div>
  );
};

export default Main;
