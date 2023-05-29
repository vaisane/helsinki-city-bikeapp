import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";
const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/stations" className="navLink">
        Stations
      </Link>
      <Link to="/journeys" className="navLink">
        Journeys
      </Link>
    </div>
  );
};
export default NavBar;
