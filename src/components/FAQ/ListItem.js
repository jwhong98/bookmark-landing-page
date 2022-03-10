import React, { useState } from "react";
import classes from "./ListItem.module.css";
import upArrow from "../../images/icon-arrow.svg";
import downArrow from "../../images/icon-arrowDown.svg";

const ListItem = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <li className={classes.listItem} onClick={toggleHandler}>
      <div className={classes.interact}>
        <p className={classes.question}>{props.question}</p>
        <img src={toggle ? downArrow : upArrow} alt="" />
      </div>
      {toggle ? <p className={classes.answer}>{props.answer}</p> : ""}
    </li>
  );
};

export default ListItem;
