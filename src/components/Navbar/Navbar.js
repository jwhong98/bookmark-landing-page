import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo-bookmark.svg";

const Navbar = (props) => {
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
        <div className={classes.toggle} onClick={props.onToggle}>
          <ion-icon name="menu-sharp"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
