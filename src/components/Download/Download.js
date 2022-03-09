import React from "react";
import classes from "./Download.module.css";
import { data } from "./data";
import ExtensionCard from "./ExtensionCard";

const Download = () => {
  const createExtension = (info) => {
    return (
      <ExtensionCard
        key={info.id}
        img={info.img}
        title={info.title}
        version={info.version}
      />
    );
  };
  return (
    <section className={classes.download}>
      <div className={classes.downloadContainer}>
        <div className={classes.downloadText}>
          <h1>Download the extension</h1>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className={classes.extensionContainer}>
          {data.map(createExtension)}
        </div>
      </div>
    </section>
  );
};

export default Download;
