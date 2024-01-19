import React, { useEffect } from "react";
import "./Navbar.css";

const NavBar = () => {
    const [scroll, setScroll] = React.useState(false);

    useEffect(() => {
        const navbar = document.querySelector(".navBarContainer");
        window.onscroll = () => {
            if (window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
    }, []);
  return (
    <div className={`navBarContainer ${scroll && "navBlack"}`}>
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
