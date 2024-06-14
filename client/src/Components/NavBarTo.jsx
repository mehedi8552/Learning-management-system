import React from "react";
import { Link } from "react-router-dom";
import "../../src/assets/css/NavBarTo.css";
import Logo from "../assets/website-logo.png";
const NavBarTo = () => {
  return (
    <div className="navbar">
      <div>
        <Link className="link" to={"/"}>
          Home
        </Link>
        <div className="dropdown-container">
          <Link className="link">
            Protfolio
          </Link>
          <div className="dropdown-content">
            <Link className="link" to={"/"}>
              Service
            </Link>
            <div className="dropdown">
            <Link className="link" to={"/"}>
              Contact Me
            </Link>
            <div className="dropdown-contentto">
            <Link className="link" to={"/"}>
              Contact Me
            </Link>
            <Link className="link" to={"/"}>
              Contact Me
            </Link>
            <Link className="link" to={"/"}>
              Contact Me
            </Link>
            </div>
            </div>
            <Link className="link" to={"/"}>
              About me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarTo;
