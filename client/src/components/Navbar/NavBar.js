import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          NYT Scaper 
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/Main"
              ? "active"
              : ""
          }
        >
          <Link to="/">Main</Link>
        </li>
        <li
          className={window.location.pathname === "/Search" ? "active" : ""}
        >
          <Link to="/Search">Search</Link>
        </li>
        <li className={window.location.pathname === "/Saved" ? "active" : ""}>
          <Link to="/Saved">Saved</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
