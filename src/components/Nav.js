import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      Nav
      <Link
        to= "/auth" state= {{ isLogin: true }}>Login
      </Link>
      <br />
      <Link 
        to= "/auth" state= {{ isLogin: false }}>Sign Up
      </Link>
    </div>
  );
};

export default Nav;
