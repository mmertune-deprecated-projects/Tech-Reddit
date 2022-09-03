import React from "react";
import PostCard from "../post/PostCard";

import classes from "./Comments.module.css";

function Comments({ coms }) {
  //recursive component called for nested comments
  if (!coms.length) return;

  return (
    <div className={classes.container}>
      {coms.map((commentObj, i) => (
        <div key={i} className={classes.comment__container}>
          <PostCard
            type="comment"
            text={commentObj.text}
            user={commentObj.user}
          />
          <br />
          <Comments coms={commentObj.comments} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
