import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header/Header.js';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Home from './components/Pages/Home';
import Blog from './components/Pages/Blog';
import "./App.css";

function App() {
  return (
    <Router >
      <div className="w-blog">
        <Header className="header"></Header>
        {/* <content className='content'>Welcome to G's Blog!</content> */}
        
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </div>
    </Router>
  );
}

export default App;
