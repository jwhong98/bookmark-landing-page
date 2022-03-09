import React from "react";
import classes from "./FeaturesCard.module.css";

const FeaturesCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.img} alt="" />
      <div className={classes.cardText}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button>More Info</button>
      </div>
      <div className={classes.bar}></div>
    </div>
  );
};

export default FeaturesCard;
