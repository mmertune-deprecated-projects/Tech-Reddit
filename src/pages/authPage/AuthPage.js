import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./AuthPage.module.css";

function AuthPage() {
  const linkProp = useLocation();

  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleHandler = () => {
    setIsLogin(!isLogin);
  };

  // Uses prop from Link on Homepage to change AuthPage
  useEffect(() => {
    if (linkProp.state) {
      setIsLogin(linkProp.state.isLogin);
    }
  }, []);

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
      <button className={classes.toggler} onClick={toggleHandler}>
        {isLogin ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}

export default AuthPage;
