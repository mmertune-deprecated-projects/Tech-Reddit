import React from "react";
import { Link } from "react-router-dom";

import classes from "./Recommended.module.css";

function Recommended() {
  return (
    <div className={classes.container}>
      <h4>Recommended</h4>
      <ul className={classes.links_list}>
        {["memes", "hardware", "software", "education", "salaries"].map(
          (community) => (
            <li className={classes.link}>
              <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" />
              <Link to="/">{community}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Recommended;
