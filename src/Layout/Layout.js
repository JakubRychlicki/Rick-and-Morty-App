import React from "react";

import Header from "./header/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
