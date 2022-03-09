import React, { useState } from "react";
import { feature1, feature2, feature3 } from "./data";
import classes from "./Features.module.css";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const [feature, setFeature] = useState(feature1);

  const resetClass = () => {
    const items = document.querySelectorAll("li");
    items.forEach((item) => {
      item.classList.remove(classes.active);
    });
  };
  const onClickHandler1 = (e) => {
    resetClass();
    e.target.classList.add(classes.active);
    setFeature(feature1);
  };

  const onClickHandler2 = (e) => {
    resetClass();
    e.target.classList.add(classes.active);
    setFeature(feature2);
  };

  const onClickHandler3 = (e) => {
    resetClass();
    e.target.classList.add(classes.active);
    setFeature(feature3);
  };
  return (
    <section className={classes.features}>
      <div className={classes.featuresContainer}>
        <div className={classes.featuresText}>
          <h1>Features</h1>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <ul className={classes.featuresNav}>
          <li className={classes.active} onClick={onClickHandler1}>
            Simple Bookmarking
          </li>
          <li onClick={onClickHandler2}>Speedy Searching</li>
          <li onClick={onClickHandler3}>Easy Sharing</li>
        </ul>
        <FeaturesCard {...feature} />
      </div>
    </section>
  );
};

export default Features;
