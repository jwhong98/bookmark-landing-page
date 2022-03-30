import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";
import logo from "../../images/logo-mobile.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";

const Drop = (props) => {
  return <div className={classes.backdrop} onClick={props.onToggle}></div>;
};

const MobileMenu = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Drop onToggle={props.onToggle} />
          <section className={classes.overlay}>
            <div className={classes.mobileHead}>
              <img src={logo} alt="logo" />
              <ion-icon name="close-sharp" onClick={props.onToggle}></ion-icon>
            </div>
            <ul className={classes.mobileMenu}>
              <li className={classes.menuItem}>features</li>
              <li className={classes.menuItem}>pricing</li>
              <li className={classes.menuItem}>contact</li>
              <button className={classes.mobileBtn}>login</button>
            </ul>
            <div className={classes.mobileSocial}>
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </section>
        </>,
        portalElement
      )}
    </>
  );
};

export default MobileMenu;
