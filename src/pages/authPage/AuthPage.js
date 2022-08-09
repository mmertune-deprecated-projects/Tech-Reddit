import { React, useState } from "react";

import classes from "./AuthPage.module.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={classes.main_container}>
      <h1 className={classes.title}>{isLogin ? "Login" : "Sign Up"}</h1>
      <form className={`${classes.form} ${classes.box_curve}`}>
        <div className={classes.email_container}>
          <label className={classes.label}>Email</label>
          <input
            className={`${classes.box_curve}`}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={classes.email_container}>
          <label className={classes.label}>Password</label>
          <input
            className={`${classes.box_curve}`}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>{" "}
        <button
          className={`${classes.toggler} ${classes.box_curve}`}
          onClick={toggleHandler}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default AuthPage;
