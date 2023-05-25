import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Helsinki City BikeApp!</h1>
      <Navbar />
    </div>
  );
};

export default Header;
