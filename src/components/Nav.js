import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Button from "./button/Button";

const Nav = () => {
  return (
    <div className={classes.nav}>
      <Link to="/home" className={classes.icon}>
        <img
          src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
          className={classes.nav_icon}
        />
      </Link>
      <form className={classes.search_container}>
        <label htmlFor="search_input" className={classes.search_label}>
        <FontAwesomeIcon icon={faSearch} />
        </label>
        <input
          type="text"
          placeholder="Search"
          className={classes.search_input}
          id="search_input"
        />
      </form>
      <div className={classes.link_container}>
        <Button title="Login" link="/auth" loginState = {true} className = {classes.login_bttn}/>
        {/* <Link to="/auth" state={{ isLogin: true }}>
          Login
        </Link> */}
        {/* <Link to="/auth" state={{ isLogin: false }}>
          Sign Up
        </Link> */}
        <Button title="SignUp" link="/auth" loginState = {false} className = {classes.signup_bttn}/>

      </div>
    </div>
  );
};

export default Nav;
