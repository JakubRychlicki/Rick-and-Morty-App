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
    if (window.innerWidth >= 1000) {
      openModal();
    }
  }, [window.innerWidth]);

  return (
    <div className={classes.Container}>
      {show ? (
        <SearchModal show={show} close={closeModal} />
      ) : (
        <button className={classes.btnOpen} onClick={openModal}>
          otworz
        </button>
      )}

      <Characters openFilter={openModal} />
    </div>
  );
};

export default Main;
