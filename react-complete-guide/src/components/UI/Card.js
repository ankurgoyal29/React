import "./Card.css";
import React from "react"; // We dont need this anymore

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
