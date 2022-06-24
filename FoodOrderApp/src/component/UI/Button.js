import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.class}`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
