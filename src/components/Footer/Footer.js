import React from "react";
import classes from "./Footer.module.css";
import logo from "../../images/logo-bookmark2.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <img className={classes.footerLogo} src={logo} alt="" />
        <ul className={classes.footerList}>
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
        <div className={classes.socialWrap}>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
