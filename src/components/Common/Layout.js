import React from "react";
import { NavBar } from "../Landing/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="bgCustom">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
