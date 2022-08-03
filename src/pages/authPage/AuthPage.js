import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./AuthPage.module.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    //Logic for if sign in  or sign up, for now anything will sign in

    navigate("/home", { replace: true });
    return;
  };

  const toggleHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.info}>
        <h2 className={classes.title}>Logo or Title</h2>
        <p className={classes.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nisi
          odio praesentium aperiam asperiores fuga. Iure, autem ullam rem nisi
          perferendis.
        </p>
      </div>
      <form className={classes.form}>
        <span className={classes.header}>{isLogin ? "Login" : "Sign Up"}</span>
        <div className={classes.text_container}>
          <input
            className={classes.text_input}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label
            className={` ${classes.label} ${email && classes.input_focused}`}
          >
            Email or Username
          </label>
        </div>
        <div className={classes.text_container}>
          <input
            className={classes.text_input}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label
            className={` ${classes.label} ${password && classes.input_focused}`}
          >
            Password
          </label>
        </div>
        <button
          className={`btn ${classes.btn_submit} ${
            email && password && "btn_valid"
          }`}
          onClick={submitHandler}
        >
          Submit
        </button>

        <input
          className={`btn ${classes.btn_toggle}`}
          type="button"
          value={!isLogin ? "Login" : "Sign Up"}
          onClick={toggleHandler}
        />
      </form>
    </div>
  );
}

export default AuthPage;
