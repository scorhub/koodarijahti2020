import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({match}) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink exact to="/en/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/en/rules">Rules</NavLink>
        </li>
        <li>
          <NavLink to="/fi">Suomeksi</NavLink>
        </li>
        <li>
          <NavLink to="/en/login">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/en/register">Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
