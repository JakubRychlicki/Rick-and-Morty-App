import React, { useState } from "react";

import classes from "./Main.module.css";
import SearchModal from "../../components/SearchModal/SearchModal";
import Characters from "../../components/Characters/Characters";

const Main = () => {
  const [show, setShowOn] = useState(true);

  const openModal = () => {
    setShowOn(true);
  };

  const closeModal = () => {
    setShowOn(false);
  };

  return (
    <div className={classes.Container}>
      <SearchModal show={show} close={closeModal} />
      <Characters openFilter={openModal} />
    </div>
  );
};

export default Main;
