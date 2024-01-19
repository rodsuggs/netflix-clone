import React from "react";
import navBar from "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="titleRow">{/* <h1 className="title">NETFLIX</h1> */}</div>
      <div className="buttonRow">
        <h1 className="title">NETFLIX</h1>
        <div>
          <button className="signInButton">Sign In</button>
          <button className="signUpButton">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
