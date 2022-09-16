import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = ({ title, link, loginState, classProp }) => {
  return (
    <Link to={link} state={{ isLogin: loginState }} className= {`${classes.button} ${classes[classProp]}`}>
      {title}
    </Link>
  );
};

export default Button;
