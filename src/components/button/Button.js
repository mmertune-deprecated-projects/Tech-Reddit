import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = ({ title, link, loginState }) => {
  return (
    <Link to={link} state={{ isLogin: loginState }}>
      {title}
    </Link>
  );
};

export default Button;
