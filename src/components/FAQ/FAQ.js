import React from "react";
import classes from "./FAQ.module.css";
import { data } from "./data";
import ListItem from "./ListItem";

const FAQ = () => {
  const createListItem = (info) => {
    return (
      <ListItem key={info.id} question={info.question} answer={info.answer} />
    );
  };
  return (
    <section className={classes.faq}>
      <div className={classes.faqContainer}>
        <div className={classes.faqText}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <ul className={classes.faqMenu}>{data.map(createListItem)}</ul>
        <button>More Info</button>
      </div>
    </section>
  );
};

export default FAQ;
