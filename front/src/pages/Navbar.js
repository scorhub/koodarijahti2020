import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const showMore = () => {
    let x = document.getElementById("navbar");
  if (x.className === "") { 
    x.className += " responsive";
    } else {
      x.className = "";
    }
  }

  window.onclick = function(e) {
    let x = document.getElementById("navbar");
    if (!e.target.matches('.icon') && !e.target.matches('#icon')) {
      if (x.classList.contains('responsive')) {
        x.classList.remove('responsive');
      }
    }
  }

  return (
    <nav id="navbar">
      <NavLink activeClassName="active" exact to="/en">Home</NavLink>
      <NavLink activeClassName="active" exact to="/en/about">About</NavLink>
      <NavLink activeClassName="active" exact to="/en/rules">Rules</NavLink>
      <NavLink activeClassName="active" exact to="/fi">Suomeksi</NavLink>
      <NavLink activeClassName="active" exact to="/en/login">Sign In</NavLink>
      <NavLink activeClassName="active" exact to="/en/register">Sign up</NavLink>
      <NavLink to="#" className="icon" onClick={e => showMore()}><i className="fa fa-bars" id="icon"></i></NavLink>
    </nav>
  );
};

export default Navbar;
