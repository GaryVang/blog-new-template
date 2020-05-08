import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="bg-login">
        <text className="login-title">Log in to your Blog</text>
        <div className="username-wrapper">
          <label className="login-label-username">Username</label>
          <input className="login-input-username" type="text"></input>
        </div>
        <div className='password-wrapper'>
          <label className="login-label-password">Password</label>
          <input className="login-input-password" type="text"></input>
        </div>

        <button className="login-button">Log In</button>
        <text className="login-text-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </text>
      </div>
    </div>
  );
};

export default Login;
