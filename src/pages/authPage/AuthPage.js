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
      <form className={classes.form}>
        <span className={classes.title}>{isLogin ? "Login" : "Sign Up"}</span>
        <div className={classes.email_container}>
          <label className={classes.label}>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={classes.email_container}>
          <label className={classes.label}>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </form>
      <button className={classes.toggler} onClick={toggleHandler}>
        {!isLogin ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}

export default AuthPage;
