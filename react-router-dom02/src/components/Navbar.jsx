import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>NavLink</div>
      <ol>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "red" : "";
            }}
            to=""
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "red" : "";
            }}
            to="user/:userid"
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "red" : "";
            }}
            to="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "red" : "";
            }}
            to="github"
          >
            Github
          </NavLink>
        </li>
      </ol>
    </>
  );
};

export default Navbar;
