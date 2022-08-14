import React from "react";

import ReactDOM from "react-dom";

import classes from "./modal.module.css";

//The dark overlay that covers the screen
//onClick should normally be a function that unmounts Modal
const BackDrop = (props) => (
  <div className={classes.backdrop} onClick={props.onConfirm} />
);

const Overlay = (props) => (
  <div className={classes.overlay}>{props.component}</div>
);

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <Overlay component={props.component} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
