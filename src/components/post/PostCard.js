import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "../modal/Modal";
import classes from "./PostCard.module.css";

function PosCard(props) {
  //This component handles regular posts on the main page, main posts and comments based on the type prop
  const type = props.type;
  const [displayModal, setDisplayModal] = useState("");
  const [displayText, setDisplayText] = useState(props.text);

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
        {type === "small_post" && (
          <FontAwesomeIcon
            className={classes.mini_icon}
            onClick={previewHandler}
            icon={props.text ? "" : faEye}
          />
        )}
        <div className={`${classes.heading} ${classes.underline}`}>
          <Link className={classes.main_heading} to="/">
            {type !== "comment" && props.title}
          </Link>
          <div className={classes.post_about}>
            <img
              src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
              className={classes.post_info_img}
            />
            <div className={classes.user_date}>
              <span className={classes.user}>{props.user || "user"}</span>
              <br />
              <time
                dateTime={props.date}
                className={classes.date}
              >{`Posted On: ${props.date || "00-00-0000"}`}</time>
            </div>
          </div>
        </div>
        <p
          className={`${classes.text} ${
            type === "small_post" && classes.text_small
          }`}
        >
          {!displayText ? (
            <img className={classes.mini_img} src={props.img} />
          ) : (
            displayText
          )}
        </p>
        <div className={classes.footing_wrapper}>
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

            <strong>6 Likes</strong>

            {type !== "small_post" && (
              <button
                className={`${classes.message_button} ${
                  props.like === false && classes.selected
                }`}
              >
                &#128172;
              </button>
            )}
          </div>
          <Link className={classes.community} to="/">
            {props.community ?? ""}
          </Link>
        </div>

        <strong className={classes.answer_ct}>9 Answers</strong>
      </div>
    </>
  );
}

export default PosCard;
