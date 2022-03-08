import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo-bookmark.svg";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navContainer}>
        <img src={logo} alt="" className={classes.navLogo} />
        <ul className={classes.navMenu}>
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
          <li>
            <button type="button">login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
