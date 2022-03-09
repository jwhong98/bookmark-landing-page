import React from "react";
import classes from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={classes.cta}>
      <div className={classes.ctaContainer}>
        <p>35,000+ already joined</p>
        <h1>Stay-up-to-date with what we're doing</h1>
        <form action="">
          <input type="text" placeholder="Enter your email address" />
          <button>Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
