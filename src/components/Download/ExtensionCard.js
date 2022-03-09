import React from "react";
import classes from "./ExtensionCard.module.css";

const ExtensionCard = (props) => {
  return (
    <div className={classes.extensionCard}>
      <div className={classes.browserWrap}>
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <p>Minimum version {props.version}</p>
      </div>

      <div className={classes.buttonWrap}>
        <button>Add & Install Extension</button>
      </div>
    </div>
  );
};

export default ExtensionCard;
