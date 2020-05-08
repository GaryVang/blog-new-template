import React from "react";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Move inline styling to css file.

  return (
    <div className="navbar-container" style={navbarStyle}>
      <div className="left-wrapper">
        <ul>
          <li className="home">
            <Link to="/">
              <Home className="home-icon" />
              Home
            </Link>
          </li>
          <li className="blog">
            <Link to="/blog">
              <svg class="MuiSvgIcon-root">
                <path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z" />
              </svg>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-wrapper">
        <ul>
          <li className="login">
            <Link to="/login">Log in</Link>
          </li>
          <li className="signup">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const navbarStyle = {
  background: "#000000",
  color: "#FFFFFF",
  height: "66px",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
  // alignContent: 'center'
};

export default Header;
