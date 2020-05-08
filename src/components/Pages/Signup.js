import React from "react";
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="bg-signup">
        <text className="signup-title">Create your Blog Account</text>
        <div className="username-wrapper">
          <label className="signup-label-username">Username</label>
          <input className="signup-input-username" type="text"></input>
        </div>
        <div className="password-wrapper">
          <label className="signup-label-password">Password</label>
          <input className="signup-input-password" type="text"></input>
        </div>

        <button className="signup-button">Create Account</button>
        <text className="signup-text-signup">
          Already have an account? <Link to="/login">Log in</Link>
        </text>
      </div>
    </div>
  );
};

export default Signup;
