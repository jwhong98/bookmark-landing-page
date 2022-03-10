import React from "react";
import classes from "./Hero.module.css";
import img from "../../images/illustration-hero.svg";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContainer}>
        <div className={classes.heroText}>
          <h1>a simple bookmark manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try for
            free.
          </p>
          <div className={classes.buttonContainer}>
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
          </div>
        </div>

        {/* either use image container or just the img tag */}
        <div className={classes.imgContainer}>
          <img src={img} alt="" />
          <div className={classes.blueBar}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
