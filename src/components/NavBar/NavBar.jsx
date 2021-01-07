import React from 'react';
import logo from "../../logo.svg";
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="header--container">
      <div className="header">
        <img src={logo} className="header--logo" alt="logo"/>
        <div className="header--title">Fire Notes 🔥</div>
      </div>
    </header>
  );
};

export default NavBar;