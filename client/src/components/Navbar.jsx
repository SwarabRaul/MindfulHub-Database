// import { useEffect } from "react";
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


  const loginButton = localStorage.getItem("token") ? (
    <li>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        LOGOUT
      </button>
    </li>
  ) : (
    <li>
      <NavLink to="/login">LOGIN</NavLink>
    </li>
  );

  return (
    <div className="navbar_container">
      <h1 className="navbar_header">
        <Link to="/">MindfulHub</Link>
      </h1>
      <ul className="navbar_ul">
        <li>
          <NavLink to="/">BLOGS</NavLink>
        </li>
        <li>
          <NavLink to="/">RESOURCES</NavLink>
        </li>
        <li>
          <NavLink to="/chat">CHAT</NavLink>
        </li>
        <li>{loginButton}</li>
      </ul>
    </div>
  );
};

export default Navbar;
