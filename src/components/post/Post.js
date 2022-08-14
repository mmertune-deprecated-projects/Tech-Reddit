import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../modal/Modal";
import classes from "./Post.module.css";

function Post(props) {
  const [displayModal, setDisplayModal] = useState("");
  const [displayText, setDisplayText] = useState("");

  //handles either displaying images for image based posts,
  //or giving a quick read of the first few sentences of a text post
  const previewHandler = () => {
    if (props.img) {
      setDisplayModal(props.img);
    } else {
      if (!displayText) setDisplayText(props.text);
      else setDisplayText("");
    }
  };

  return (
    <>
      {displayModal && (
        <Modal
          component={<img src={displayModal} />}
          onConfirm={() => setDisplayModal("")}
        />
      )}

      <div className={classes.post_container}>
        <FontAwesomeIcon
          className={classes.mini_icon}
          onClick={previewHandler}
          icon={
            props.text ? (displayText ? faChevronUp : faChevronDown) : faEye
          }
        />
        <div className={`${classes.heading} ${classes.underline}`}>
          <Link className={classes.main_heading} to="/">
            {props.title ?? "Post Title"}
          </Link>
          <p className={classes.date}>
            {!displayText
              ? `Posted On: ${props.date || "00-00-0000"}`
              : displayText.substring(0, 182) + "..."}
          </p>
        </div>
        <div className={classes.info_wrapper}>
          <div className={classes.btns}>
            <button
              className={`${classes.like_button} ${
                props.like === true && classes.selected
              }`}
            >
              &#128077;
            </button>
            <button
              className={`${classes.dislike_button} ${
                props.like === false && classes.selected
              }`}
            >
              &#128078;
            </button>
          </div>
          <Link className={classes.community} to="/">
            {props.community ?? "/community"}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Post;
