import React from "react";
import { Link } from "react-router-dom";

import classes from "./DrawerGroup.module.css";

function DrawerGroup(props) {
  return (
    <div className={classes.container}>
      <h4>{props.cat}</h4>
      <ul className={classes.links_list}>
        {props.list.map((community) => (
          <li className={classes.link}>
            <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" />
            <Link to="/">{community}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrawerGroup;
